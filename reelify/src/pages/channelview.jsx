import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Homegrid from "../components/homeGrid";
import About from "../components/channelAbout";
import Playlist from "../components/channelPlaylist";

const tabs = {
  videos: Homegrid,
  playlist: Playlist,
  about: About,
};

const Channelview = () => {
  const { id, tab } = useParams();
  const navigate = useNavigate();

  const [active, setActive] = useState(tab || "videos");

  useEffect(() => {
    if (!tab) {
      navigate(`/user/${id}/videos`, { replace: true });
    } else {
      setActive(tab);
    }
  }, [id, tab, navigate]);

  const MyComponent = tabs[active] || Homegrid;

  const data = {
    channelName: "Shrage",
    id: id,
    username: "agrawalshreyansh",
    subscribers: 100,
    subscribedTo: 100,
    avatar: "/assets/avatar2.png",
    coverImage: "/assets/poster.png",
  };

  return (
    <div className="h-full">
      <div className="px-6 h-[44%] flex items-center justify-center">
        <img src={data.coverImage} className="rounded-2xl" />
      </div>

      <div className="flex -mt-[20vw] xl:-mt-[6vw] lg:-mt-[8vw] md:-mt-[12vw] px-12 w-[85vw] sm:-mt-[16vw] text-sm h-54">
        <div className="w-[50%] sm:w-[18%]">
          <img
            src={data.avatar}
            className="rounded-full border-2 border-highlight w-[100%]"
          />
        </div>
        <div className="text-white flex flex-col justify-end w-[30%] px-8 mb-10">
          <div className="text-[1.8em] text-primary">{data.channelName}</div>
          <div className="text-sm">@{data.username}</div>
          <div className="text-sm">
            <span>{data.subscribers}M subscribers</span>
            <span> . </span>
            <span>{data.subscribedTo} subscribed</span>
          </div>
        </div>
        <div className="flex flex-col justify-end ml-auto mb-8">
          <button className="bg-highlight text-primary py-2 px-6 rounded-xl text-xl mr-16 mb-10">
            Subscribe
          </button>
        </div>
      </div>

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

      <div className="mx-2 mt-4 mb-4">
        {MyComponent && <MyComponent showChannelName={false} />}
      </div>
    </div>
  );
};

export default Channelview;
