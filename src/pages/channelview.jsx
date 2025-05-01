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
import SubscribeButton from "../components/subscribeButton";

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
  const [error,setError] = useState(null)
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchChannelData(id);
      const videoarr = await fetchChannelVideos(id);
      setchannelData(data);
      setVideosData(videoarr);
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


  return (
    <div className="h-full">
      <div className="px-6 h-[20vw] flex items-center justify-center">
        <img src={channelData.coverImage} className="rounded-2xl max-h-full" />
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
      <div className="flex items-center -mt-20 px-12 w-[85vw] text-sm h-52">
       <div className="h-[25vw] w-[25vw] md:h-[18vw] md:w-[18vw] xl:h-[14vw] xl:w-[14vw] flex items-center justify-center rounded-full border-2 border-amber-600 overflow-hidden">

          <img
            src={channelData.avatar}
            className="w-full h-full object-contain"
            alt="avatar"
          />
        </div>
        <div className="text-white flex flex-col justify-end px-8 mt-12">
          <h3 className="xl:text-2xl md:text-xl sm:text-sm text-base text-primary">
            {channelData.fullName}
          </h3>
          <p className="text-sm">@{channelData.username}</p>
          <div className="md:text-sm text-xs">
            <span>{channelData.subscribersCount} subscribers</span>
            <span> . </span>
            <span>{channelData.channelsSubscribedToCount} subscribed</span>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end h-[50%]">
          <SubscribeButton owner={channelData.username} subscribedStatus={channelData.isSubscribed}/>
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
