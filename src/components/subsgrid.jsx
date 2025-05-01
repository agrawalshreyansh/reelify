import { useEffect, useState } from "react";
import Homegrid from "./homeGrid";
import axios from 'axios';
import Loader from './loader'
import { BASE_URL } from "../constants/constants.js";

const SubscriptionGrid = () => {

    const [channels, setChannels] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [videos, setVideos] = useState([])
    const [status,setStatus] = useState(0)

    const fetchSubscribedChannels = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/subscriptions/mysubscriptions`, { withCredentials: true })
            setChannels(response.data.data.subscribedTo)
            console.log(response.data.data)
        } catch (error) {
            setStatus(error.response.status)
            console.log(error.response.status)
        }
        finally {
            setLoading(false)
        }
    }

    const fetchSubscribedVideos = async () => {
        
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/subscriptions/subscribedvideos`, { withCredentials: true })
            console.log(response.data.data)
            setVideos(response.data.data)
          

        } catch (error) {
           
            console.log(error)
        }
    }



    useEffect(() => {
        fetchSubscribedChannels()
        fetchSubscribedVideos()
    }, [])

    return (
        <>
            <div className="text-white">
                {isLoading ? <Loader /> :
                channels.length === 0 ? status === 401 ? <div>Please Login First !</div> : <div>Please Subscribe to Some Channels to see their content here !</div> :
                    <div className="flex items-center py-4 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden mx-4 border-b-2 border-b-secondary">
                        
                          {  channels.map((channel) => {
                                return (
                                    <div className="h-32 w-24 flex flex-col justify-center items-center p-4 hover:bg-highlight cursor-pointer rounded-xl" key={channel._id}>
                                        <div className="rounded-full h-18 w-18 border-2 border-secondary">
                                            <img src={channel.avatar} className="h-[100%] w-[100%] rounded-full" />
                                        </div>
                                        <h3 className="text-primary text-lg line-clamp-1 w-18 break-words text-center">{channel.username}</h3>
                                    </div>
                                );
                            })
}
                    </div>
                }
                <div>

                    <Homegrid showChannelName={true} videos={videos} />

                </div>
            </div>
        </>
    )
}

export default SubscriptionGrid;