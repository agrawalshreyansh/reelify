import axios from "axios"
import { BASE_URL } from "../constants/constants.js";


export const fetchChannelData = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/users/user/${id}`,{withCredentials: true});
        console.log(response.data.data)
        return response.data.data;  
    } catch (error) {
        
        return error.response.data.message;  
    }
};


export const fetchChannelVideos = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/videos/getVideos/${id}`)
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


