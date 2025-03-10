import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router-dom";
import Listview from "./listView";
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from "../components/loader";

const StreamLayout = () => {
    
    const {id} = useParams()
    const [data, setData] = useState({})
    const [isLoading,setLoading] = useState(false)

    
    const getVideoData = async ({id}) => {
      
      try {
        const response = await axios.get(`https://reelify-backend.onrender.com/api/v1/videos/play/${id}`)
        setData(response.data.data)
        console.log(response.data)
        
      } catch (error) {
        console.log(error)
      }
      
    }

    const updateHistory = async ({id}) => {

      try {
          const response = await axios.get(`http://localhost:3000/api/v1/videos/${id}/updateHistory`,{withCredentials:true})

          console.log(response)

      } catch (error) {
          console.log(error)
      }


    }
    
    useEffect(() => { 
      setLoading(true)

      getVideoData({id})
      updateHistory({id})

      setLoading(false)
    } ,[id])
    
    
   

    
    const videoOptions = {
      type: "video",
      sources: [
        {
          src: data?.videoFile, 
            type: "video/mp4",
          },
        ],
        poster: data.thumbnail
      };

    const Options = {
        autoplay:true,
        speed: { selected: 1, options: [0.25 , 0.5, 1, 1.5, 2] }
    }

    console.log(data)

    return (
        <>
        <div className="h-[92vh] overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            
            <div className="flex">
                <div className="w-[70%] ml-6 mt-4 flex flex-col ">
              {isLoading ? (<div className="w-[100%] h-[85vh] flex items-center justify-center"><Loader/></div>) :  
                  <div>
                  
                  <div className="border-2 /border-amber-200 rounded-3xl">
                      <Plyr source={videoOptions}
                      options={Options}  
                      />
                  </div>
                  <div className="text-white my-2 mx-4">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div className="text-primary text-2xl">{data.title}</div>
                        <div className="flex text-secondary text-sm">
                          <span>30,24,435 View</span>
                          <span>.</span>
                          <span>{data.createdAt}</span>
                        </div>
                      </div>
                      <div className="flex w-[20%] justify-between">
                          
                        <div className="flex justify-between w-[42%]">
                          <button className="bg-secondary p-2 w-10 h-10 rounded-xl"><img src="../assets/like.png"/></button>
                          <button className="bg-secondary p-2 w-10 h-10 rounded-xl rotate-180"><img src="../assets/like.png"/></button>
                        </div>
                        <div className="flex justify-between">
                          <button className="bg-secondary p-2 w-10 h-10 rounded-xl mr-4"><img src="../assets/share.png"/></button>
                          <button className="bg-secondary p-2 w-10 rounded-xl"><img src="../assets/save-instagram.png"/></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between m-4">
                      <div className=" flex items-center ">
                        <img src="../assets/avatar2.png" className="w-12 rounded-full border-2 border-primary"/>
                        <div className="flex flex-col justify-center w-28 ml-4">
                          <p className="text-lg">Damru</p>
                          <p className="text-xs">100M subscribers</p>
                        </div>
                        <button className="bg-highlight text-primary px-4 py-2 rounded-xl ml-16">Subscribe</button>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                  <div className="border-1 border-secondary mx-4 text-white"></div>
                  <div className="text-primary mx-4">
                      <p className="text-xl">Description</p>
                    <div className="h-32 m-2">
                        <p>{data.description}</p>
                    </div>
                  </div>
                  <div className="border-1 border-secondary mx-4 text-white"></div>
                  <div className="text-primary mx-4">
                    Comments...
                  </div>
                </div>
}
                </div>


                <div className="w-[28%] ">
                  <Listview showDesc={false} width={"50vw"} data={[]} />
                </div>
                
            </div>
          
        </div>
        </>
    )
}

export default StreamLayout;