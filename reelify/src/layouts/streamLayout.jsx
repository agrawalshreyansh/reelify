import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router-dom";
import Listview from "./listView";

const StreamLayout = () => {
    
    const {id} = useParams()
    
    const data =  {
            videoSrc :  "https://res.cloudinary.com/dto71ewck/video/upload/v1739474459/Happy_valentines_day_2025_14_february_status_valentine_s_day_songs_shorts_songs_status_-_Ruchira_Recipes_-_Veg_1080p_h264_qvc10a.mp4",
            videoPosterSrc : "",
            videoTitle : "",
            videoDetails: ''
        }
    //"https://res.cloudinary.com/dto71ewck/video/upload/v1739120715/green_Screen_1_wqweo7.3gp"

    const videoOptions = {
        type: "video",
        sources: [
          {
            src: data.videoSrc, 
            type: "video/mp4",
          },
        ],
        poster: data.videoPosterSrc
      };

    const Options = {
        autoplay:true,
        speed: { selected: 1, options: [0.25 , 0.5, 1, 1.5, 2] }
    }

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
                <div className="w-[72%] h-[80vh] ml-6 mt-6 flex flex-col">
                  <Plyr source={videoOptions}
                      options={Options}  
                      />
                  <div className="text-white m-4">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div className="text-primary text-2xl">Damru fest 2024 Hurrahhhhhhhhhhh!</div>
                        <div className="flex text-secondary text-sm">
                          <span>30,24,435 View</span>
                          <span>.</span>
                          <span>3 days ago</span>
                        </div>
                      </div>
                      <div className="flex w-[17%] justify-between">
                        <div className="flex justify-between w-[50%]">
                          <button className="bg-primary p-2 w-10 h-10 rounded-xl"><img src="../assets/like.png"/></button>
                          <button className="bg-primary p-2 w-10 h-10 rounded-xl rotate-180"><img src="../assets/like.png"/></button>
                        </div>
                        <div>
                          <button className="bg-primary p-2 w-10 rounded-xl"><img src="../assets/save-instagram.png"/></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between m-4">
                      <div className=" flex items-center ">
                        <img src="../assets/avatar2.png" className="w-12"/>
                        <div className="flex flex-col justify-center w-28">
                          <p className="text-lg">Damru</p>
                          <p className="text-xs">100M subscribers</p>
                        </div>
                      </div>
                      <div>
                        <button className="bg-highlight text-primary px-4 py-2 rounded-xl">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="w-[28%] mx-2 ">
                  <Listview showDesc={false} width={"50vw"} />
                </div>
            </div>
          
        </div>
        </>
    )
}

export default StreamLayout;