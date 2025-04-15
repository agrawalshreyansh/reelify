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
            const response = await axios.get(`http://localhost:3000/api/v1/videos/history`,{withCredentials: true})
            console.log(response.data.data)
            setHistory(response.data.data)
            setLoading(false)
        } 
        catch (error) {
            setLoading(false)
            console.log(error.response)
            setStatus(error.response.status)
            
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