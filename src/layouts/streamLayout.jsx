import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useNavigate, useParams } from "react-router-dom";
import Listview from "./listView";
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import SubscribeButton from "../components/subscribeButton";
import { BASE_URL } from "../constants/constants";
import { toast } from "react-toastify";
import { FetchVideos } from "../services/fetchRandomVideos";


const StreamLayout = () => {

  const { id } = useParams()

  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [subscribedStatus, setSubscribedStatus] = useState()
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [uploadDate, setUploadDate] = useState()

  const navigate = useNavigate()

  const getVideoData = async ({ id }) => {

    try {
      const response = await axios.get(`${BASE_URL}/api/v1/videos/play/${id}`, { withCredentials: true })
      setData(response.data.data)
      console.log(response.data.data)
      setSubscribedStatus(response.data.data.isSubscribed)
      setLikes(response.data.data.likeCount)
      setDislikes(response.data.data.dislikeCount)
      const date = new Date(response.data.data.createdAt);
      const options = { year: 'numeric', month: 'short', day: '2-digit' };
      const formattedDate = date.toLocaleDateString('en-GB', options);
      setUploadDate(formattedDate)


    } catch (error) {
      console.log(error)
    }

  }

  const updateHistory = async ({ id }) => {

    try {
      const response = await axios.get(`${BASE_URL}/api/v1/videos/${id}/updateHistory`, { withCredentials: true })
      console.log(response)

    } catch (error) {
      console.log(error)
    }


  }

  const increaseLike = async (id) => {
    console.log({ id })

    try {
      const response = await axios.get(`${BASE_URL}/api/v1/videos/${id}/like`, { withCredentials: true })
      console.log(response)


    } catch (error) {
      console.log(error)
    }
  }

  const increaseDislike = async (id) => {
    console.log({ id })

    try {
      const response = await axios.get(`${BASE_URL}/api/v1/videos/${id}/dislike`, { withCredentials: true })
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    await updateHistory({ id })
    await getVideoData({ id })


  }

  const [videos,setVideos] = useState([])
  const [error,setError] = useState()

  


  useEffect(() => {
    setLoading(true)
    fetchData()
    setLoading(false)

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

  }, [id])





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
    autoplay: true,
    speed: { selected: 1, options: [0.25, 0.5, 1, 1.5, 2] }
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
          <div className="w-[70%] ml-6 mt-4 flex flex-col ">
            {isLoading ? (<div className="w-[100%] h-[85vh] flex items-center justify-center"><Loader /></div>) :
              <div>

                <div className=" overflow-hidden rounded-3xl shadow-[1px_1px_40px_-9px_rgba(255,255,255,0.82)] aspect-video">
                  <Plyr
                    source={videoOptions}
                    options={Options}
                    
                  />
                </div>

                <div className="text-white my-2 mx-4">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="text-primary text-2xl">{data.title}</div>
                      <div className="flex text-secondary text-sm">
                        <span>{data.views} views</span>
                        <span> . </span>
                        <span>{uploadDate}</span>
                      </div>
                    </div>
                    <div className="flex w-52 justify-between mr-24">

                      <div className="flex justify-between w-28  h-14 bg-secondary rounded-2xl">
                        <div className="p-1 hover:bg-primary rounded-l-2xl">
                          <button className=" w-10 h-8 flex ml-2" onClick={() => increaseLike(data._id)}>
                            <img src="../assets/like.png" />
                          </button>
                          <p className="text-center text-black">{likes}</p>
                        </div>
                        <div className="p-1 hover:bg-primary rounded-r-2xl ">
                          <button className=" w-10 h-8 flex ml-2"
                            onClick={() => increaseDislike(data._id)}>
                            <img src="../assets/like.png" className="rotate-180" />
                          </button>
                          <p className="text-center text-black">{dislikes}</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button className="bg-secondary hover:bg-primary p-3 w-14 h-14 rounded-xl mr-4"><img src="../assets/share.png" onClick={() => {navigator.clipboard.writeText(window.location.href);toast.success('Video URL Copied')}}/></button>
                        {/* <button className="bg-secondary p-2 w-10 rounded-xl"><img src="../assets/save-instagram.png" /></button> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between m-4">
                    <div className=" flex items-center ">
                      <img src={data.owner_image} className="w-12 h-12 rounded-full border-2 border-primary" />
                      <div className="flex flex-col justify-center w-28 ml-4 cursor-pointer" onClick={() => { navigate(`/user/${data.owner}/videos`) }}>
                        <p className="text-lg">{data.owner}</p>
                        <p className="text-xs">{data.subscribers}</p>
                      </div>
                      <SubscribeButton subscribedStatus={subscribedStatus} owner={data.owner} />
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
                <div className="border-1 border-secondary mx-4 text-white "></div>
                <div className="text-primary mx-4 ">
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
            <Listview showDesc={false} width={"50vw"} data={error,videos} />
          </div>

        </div>

      </div>
    </>
  )
}

export default StreamLayout;