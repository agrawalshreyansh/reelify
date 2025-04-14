import { useEffect, useState } from "react";
import Homegrid from "./homeGrid";
import axios from 'axios';

const Home = ({showChannelName}) => {

    const [videos,setVideos] = useState([])
    const [error,setError] = useState(null)

    const FetchVideos = async () => {

        try {
            const response = await axios.get("https://reelify-backend.onrender.com/api/v1/recommend/home")
            setVideos(response.data.data)
            
        } catch (error) {
            if (error.message) {
                setError(error.message)
                console.log(error.message)
            }
            else if (error.response){
                console.log(error.response)
            }
        }
    }

    useEffect(() => {
        FetchVideos()
    },[])

    return (
        <div>
            {videos.length === 0 ? 
            <div className="text-white flex items-center justify-center">{error}</div> :
            <Homegrid showChannelName = {showChannelName} videos={videos}/>
            }
        </div>
    )
}

export default Home;