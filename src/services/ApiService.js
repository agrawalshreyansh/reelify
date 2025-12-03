import axios from "axios";
import {BASE_URL} from "../constants.js"

class ApiService {
    constructor(baseURL) {
      this.baseURL = baseURL;
      this.isRefreshing = false;
      this.failedQueue = [];
      
      // Setup axios instance with interceptors
      this.axiosInstance = axios.create({
        baseURL: this.baseURL,
        withCredentials: true
      });
      
      this.setupInterceptors();
    }
    
    setupInterceptors() {
      // Response interceptor to handle 403 errors
      this.axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
          const originalRequest = error.config;
          
          // Check if error is 403 and we haven't already tried to refresh
          if (error.response?.status === 403 && !originalRequest._retry) {
            if (this.isRefreshing) {
              // If already refreshing, queue this request
              return new Promise((resolve, reject) => {
                this.failedQueue.push({ resolve, reject });
              })
                .then(() => {
                  return this.axiosInstance(originalRequest);
                })
                .catch((err) => {
                  return Promise.reject(err);
                });
            }
            
            originalRequest._retry = true;
            this.isRefreshing = true;
            
            try {
              // Attempt to refresh the token
              await axios.post(
                `${this.baseURL}/users/refresh-token`,
                {},
                { withCredentials: true }
              );
              
              // Token refreshed successfully, retry failed requests
              this.processQueue(null);
              this.isRefreshing = false;
              
              // Retry the original request
              return this.axiosInstance(originalRequest);
            } catch (refreshError) {
              // Token refresh failed, reject all queued requests
              this.processQueue(refreshError);
              this.isRefreshing = false;
              
              // Redirect to login or handle auth failure
              // You might want to dispatch a logout action here
              return Promise.reject(refreshError);
            }
          }
          
          return Promise.reject(error);
        }
      );
    }
    
    processQueue(error) {
      this.failedQueue.forEach((prom) => {
        if (error) {
          prom.reject(error);
        } else {
          prom.resolve();
        }
      });
      
      this.failedQueue = [];
    }
    async fetchData(endpoint, withCredentials = false) {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
    
        const response = await this.axiosInstance.get(`/${endpoint}`, {
          headers,
          withCredentials: withCredentials,
        });
    
       
        if (response.status !== 200) {
          
          return { status: response.status, error: response.data.message || 'Error' };
        }
        
        return { status: response.status, data: response.data.data };
      } catch (error) {
        if (error.response) {
          return { status: error.response.status, error: error.response.data.message };
        } else {
          return { status: 500, error: 'Network error. Please try again.' };
        }
      }
    }
    
   
    async postData(endpoint, body, withCredentials = false) {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
    
        const response = await fetch(`${this.baseURL}/${endpoint}`, {
          method: 'POST',
          headers,
          credentials: withCredentials ? 'include' : 'same-origin', 
          body: JSON.stringify(body),
        });
    
        // Check if response status is not OK (i.e., 4xx or 5xx)
        if (!response.ok) {
          // Handle 403 - try to refresh token
          if (response.status === 403) {
            try {
              // Attempt to refresh the token
              const refreshResponse = await fetch(`${this.baseURL}/users/refresh-token`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                }
              });
              
              if (refreshResponse.ok) {
                // Token refreshed successfully, retry the original request
                const retryResponse = await fetch(`${this.baseURL}/${endpoint}`, {
                  method: 'POST',
                  headers,
                  credentials: withCredentials ? 'include' : 'same-origin',
                  body: JSON.stringify(body),
                });
                
                if (!retryResponse.ok) {
                  const retryData = await retryResponse.json();
                  return { status: retryResponse.status, error: `${retryData.message}` };
                }
                
                const retryData = await retryResponse.json();
                return { status: retryData.statusCode, data: retryData.message };
              }
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError);
              // If refresh fails, return the original 403 error
              const data = await response.json();
              return { status: response.status, error: `${data.message}` };
            }
          }
          
          // Return the error message and status code for non-403 errors
          const data = await response.json();
          console.log(data)
          return { status: response.status, error: `${data.message}` };
        }
    
        const data = await response.json();
        console.log(data)
        // If everything is okay, return the formatted response
        return { status: data.statusCode, data: data.message };
    
      } catch (error) {
        // In case of network error or other exceptions, return the error message
        console.error('Error in postData:', error);
       
        return { status: 500, error: error.message };  // Return the error message and status code
      }
    }
    
    async patchData(endpoint, body, withCredentials = false) {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };

        const response = await fetch(`${this.baseURL}/${endpoint}`, {
          method: 'PATCH',
          headers,
          credentials: withCredentials ? 'include' : 'same-origin', 
          body: JSON.stringify(body),
        });

        // Check if response status is not OK (i.e., 4xx or 5xx)
        if (!response.ok) {
          // Handle 403 - try to refresh token
          if (response.status === 403) {
            try {
              // Attempt to refresh the token
              const refreshResponse = await fetch(`${this.baseURL}/users/refresh-token`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                }
              });
              
              if (refreshResponse.ok) {
                // Token refreshed successfully, retry the original request
                const retryResponse = await fetch(`${this.baseURL}/${endpoint}`, {
                  method: 'PATCH',
                  headers,
                  credentials: withCredentials ? 'include' : 'same-origin',
                  body: JSON.stringify(body),
                });
                
                if (!retryResponse.ok) {
                  const retryData = await retryResponse.json();
                  return { status: retryResponse.status, error: `${retryData.message}` };
                }
                
                const retryData = await retryResponse.json();
                return { status: retryData.statusCode, data: retryData.message };
              }
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError);
              // If refresh fails, return the original 403 error
              const data = await response.json();
              return { status: response.status, error: `${data.message}` };
            }
          }
          
          // Return the error message and status code for non-403 errors
          const data = await response.json();
          console.log(data)
          return { status: response.status, error: `${data.message}` };
        }

        const data = await response.json();
        console.log(data)
        // If everything is okay, return the formatted response
        return { status: data.statusCode, data: data.message };

      } catch (error) {
        // In case of network error or other exceptions, return the error message
        console.error('Error in patchData:', error);
       
        return { status: 500, error: error.message };  // Return the error message and status code
      }
    }
    
    async putData(endpoint, body, withCredentials = false) {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };

        const response = await fetch(`${this.baseURL}/${endpoint}`, {
          method: 'PUT',
          headers,
          credentials: withCredentials ? 'include' : 'same-origin', 
          body: JSON.stringify(body),
        });

        // Check if response status is not OK (i.e., 4xx or 5xx)
        if (!response.ok) {
          // Handle 403 - try to refresh token
          if (response.status === 403) {
            try {
              // Attempt to refresh the token
              const refreshResponse = await fetch(`${this.baseURL}/users/refresh-token`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                }
              });
              
              if (refreshResponse.ok) {
                // Token refreshed successfully, retry the original request
                const retryResponse = await fetch(`${this.baseURL}/${endpoint}`, {
                  method: 'PUT',
                  headers,
                  credentials: withCredentials ? 'include' : 'same-origin',
                  body: JSON.stringify(body),
                });
                
                if (!retryResponse.ok) {
                  const retryData = await retryResponse.json();
                  return { status: retryResponse.status, error: `${retryData.message}` };
                }
                
                const retryData = await retryResponse.json();
                return { status: retryData.statusCode, data: retryData.message };
              }
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError);
              // If refresh fails, return the original 403 error
              const data = await response.json();
              return { status: response.status, error: `${data.message}` };
            }
          }
          
          // Return the error message and status code for non-403 errors
          const data = await response.json();
          console.log(data)
          return { status: response.status, error: `${data.message}` };
        }

        const data = await response.json();
        console.log(data)
        // If everything is okay, return the formatted response
        return { status: data.statusCode, data: data.message };

      } catch (error) {
        // In case of network error or other exceptions, return the error message
        console.error('Error in putData:', error);
       
        return { status: 500, error: error.message };  // Return the error message and status code
      }
    }
    
  }

  export default new ApiService(`${BASE_URL}`); 
  