import axios from "axios"


export const fetchChannelData = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/v1/users/user/${id}`,{withCredentials: true});
        return response.data.data;  
    } catch (error) {
        
        return error.response.data.message;  
    }
};


export const fetchChannelVideos = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/v1/videos/getVideos/${id}`)
        return response.data.data
    } catch (error) {
        console.error('Error fetching Videos',error)
        return []
    }
}

export const fetchChannelPlaylists = async () => {

}

export const fetchChannelAbout = async () => {

}


