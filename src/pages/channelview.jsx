import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Homegrid from "../components/homeGrid";
import About from "../components/channelAbout";
import Playlist from "../components/channelPlaylist";
import {
  fetchChannelData,
  fetchChannelVideos,
} from "../services/fetchChannelData";
import Loader from "../components/loader";
import axios from 'axios'

const tabs = {
  videos: Homegrid,
  playlist: Playlist,
  about: About,
};

const Channelview = () => {
  const { id, tab } = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const [active, setActive] = useState(tab || "videos");
  const [channelData, setchannelData] = useState({});

  const [videosData, setVideosData] = useState([]);

  const [isSubscribed,setSubscribed] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchChannelData(id);
      const videoarr = await fetchChannelVideos(id);
      setchannelData(data);
      
      
      setVideosData(videoarr);
      setSubscribed(data.isSubscribed)
      setLoading(false);
    };

    fetchData();

    if (!tab) {
      navigate(`/user/${id}/videos`, { replace: true });
    } else {
      setActive(tab);
    }
  }, [id, tab, navigate]);

  const MyComponent = tabs[active] || Homegrid;


  const subscribeChannel = async () => {
    try {
        const response = await axios.post(`https://reelify-backend.onrender.com/api/v1/subscriptions/subscribeTo/${id}`,{}, {
          withCredentials: true,
      headers: {
          "Content-Type": "application/json", 
      },
      })
        setSubscribed(prev => !prev)
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <div className="h-full">
      <div className="px-6 h-[44%] flex items-center justify-center">
        <img src={channelData.coverImage} className="rounded-2xl h-[100%]" />
      </div>
      {isLoading ? 
      <div className="flex items-center justify-center h-31">
        <Loader/>
      </div>
      :
        Object.keys(channelData).length === 0 ? 
        <div className="text-white flex justify-center text-3xl">
            Uh! Oh! Channel doesnt exist!
        </div> 
        : 
      <div className="flex -mt-[20vw] xl:-mt-[6vw] lg:-mt-[8vw] md:-mt-[12vw] px-12 w-[85vw] sm:-mt-[16vw] text-sm h-54">
        <div className="w-[50%] sm:w-[18%]">
          <img
            src={channelData.avatar}
            className="rounded-full border-2 border-highlight w-[100%] h-[100%]"
            />
        </div>
        <div className="text-white flex flex-col justify-end w-[30%] px-8 mb-10">
          <div className="text-[1.8em] text-primary">
            {channelData.fullName}
          </div>
          <div className="text-sm">@{channelData.username}</div>
          <div className="text-sm">
            <span>{channelData.subscribersCount} subscribers</span>
            <span> . </span>
            <span>{channelData.channelsSubscribedToCount} subscribed</span>
          </div>
        </div>
        <div className="flex flex-col justify-end ml-auto mb-8">
          <button className={`cursor-pointer py-2 px-6 rounded-xl text-xl mr-16 mb-10 ${isSubscribed?'bg-stone-500 text-black' :'bg-highlight text-primary'}`} onClick={subscribeChannel}>
            {isSubscribed ? 'Subscribed':'Subscribe'}
          </button>
        </div>
      </div>
          }
      
      <div className="text-white flex items-center mx-14 border-b-2 border-highlight text-xl h-12">
        {Object.keys(tabs).map((tabName) => (
          <div
            key={tabName}
            className={`w-24 h-12 cursor-pointer flex items-center justify-center mr-10 border-b-2 border-transparent hover:border-b-primary ${
              active === tabName ? "border-b-primary" : ""
            }`}
            onClick={() => {
              setActive(tabName);
              navigate(`/user/${id}/${tabName === "videos" ? "" : tabName}`);
            }}
          >
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
          </div>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center mx-2 my-16 items-center">
          <Loader />
        </div>
      ) : (
        <div className="mx-2 mt-4 mb-4">
          {MyComponent && (
            <MyComponent showChannelName={false} videos={videosData} />
          )}
        </div>
      )}
    </div>
  );
};

export default Channelview;
