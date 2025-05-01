import axios from "axios"
import { BASE_URL } from "../constants/constants"

const FetchVideos = async () => {

        try {
            const response = await axios.get(`${BASE_URL}/api/v1/recommend/home`)
            console.log(response.data)
            return (response.data.data)
            
        } catch (error) {
            if (error.message) {
                return (error.message)
            }
            else if (error.response){
                console.log(error.response)
            }
        }
    }

export {FetchVideos}