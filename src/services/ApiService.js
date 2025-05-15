import axios from "axios";
import {BASE_URL} from "../constants.js"

class ApiService {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
    async fetchData(endpoint, withCredentials = false) {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
    
        const response = await axios.get(`${this.baseURL}/${endpoint}`, {
          headers,
          withCredentials: withCredentials,  // this replaces 'credentials'
        });
    
       
        if (response.status !== 200) {
          
          return { status: response.status, error: response.data.message || 'Error' };
        }
        
        return { status: response.status, data: response.data.data };  // Use response.data directly
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
          // Return the error message and status code
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
    
  }

  export default new ApiService(`${BASE_URL}`); 
  