import { useEffect, useState } from "react";
import Homegrid from "./homeGrid";
import { FetchVideos } from "../services/fetchRandomVideos.js";

const Home = ({showChannelName}) => {

    const [videos,setVideos] = useState([])
    const [error,setError] = useState(null)

    

    useEffect(() => {
        const videos = async () => {

            const v = await FetchVideos()
      
            if (Array.isArray(v)) {
                console.log(v)
                setVideos(v)
            }
            else {
                setError(v)
            }
            
        }
        videos()

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