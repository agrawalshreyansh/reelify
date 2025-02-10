import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router-dom";

const StreamLayout = () => {
    
    const {id} = useParams()
    
    const data =  {
            videoSrc : "https://res.cloudinary.com/dto71ewck/video/upload/v1739120715/green_Screen_1_wqweo7.3gp",
            videoPosterSrc : "",
            videoTitle : "",
            videoDetails: ''
        }
    

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
            <div className="w-[60%] border-8 border-amber-400 ml-16 mt-16">
                <Plyr source={videoOptions}
                      options={Options}  
                 />
            </div>
        </>
    )
}

export default StreamLayout;