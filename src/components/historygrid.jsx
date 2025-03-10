import Listview from "../layouts/listView";
import Loader from './loader'
import { useEffect, useState } from "react";
import axios from 'axios'

const WatchHistoryGrid = () => {

    const [isLoading, setLoading] = useState(false)

    const [status, setStatus] = useState()

    const [history, setHistory] = useState([])
    
    const getUserWatchHistory = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://reelify-backend.onrender.com/api/v1/videos/history`,{withCredentials: true})
            console.log(response.data.data)
            setHistory(response.data.data)
        } 
        catch (error) {
            console.log(error)
            setStatus(error.response.status)
            
        }
        finally {
            setLoading(false)
        }
        
    }


    useEffect(() => {
        getUserWatchHistory()
    },[])

    

    return (
        <>
            {isLoading ? 
            <div className="flex items-center justify-center h-[40%]">
                <Loader/>
            </div> : 
            status === 401 ? <h2 className="text-white">Please Login first</h2> :
            <Listview showDesc={true} width={"70%"} data={history}/>
            }
        </>
    )
}

export default WatchHistoryGrid ;