import axios from "axios"
import { useEffect,useState } from "react"
import { toast } from "react-toastify"



const SubscribeButton = ({owner,subscribedStatus}) => {

    const [isSubscribed,setSubscribed] = useState(false)


    const subscribeChannel = async (id) => {
          try {
              const response = await axios.post(`https://reelify-backend.onrender.com/api/v1/subscriptions/subscribeTo/${id}`,{}, {
                withCredentials: true,
            headers: {
                "Content-Type": "application/json", 
            },
            })
              setSubscribed(prev => !prev)
          } catch (error) {
                if (error.response.status == 401) {
                    toast.error("Please Login First!")
                }
                toast.error(error.response.data.message)
                

          }
        }
    
    useEffect(() => {
        setSubscribed(subscribedStatus)
    },[subscribedStatus])
    
        return (
            <>
                <button onClick={() => {subscribeChannel(owner)}} className={`${isSubscribed?'bg-stone-500 text-black' :'bg-highlight text-primary'} px-4 py-2 rounded-xl ml-16 cursor-pointer`}>{isSubscribed ? "Subscribed" : "Subscribe"}</button>
            </>
        )

}


export default SubscribeButton