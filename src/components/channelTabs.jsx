import React, { act, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Videocard from './videocard';
import useFetchData from '../hooks/useFetchData';

const ChannelTabs = () => {
  

  const tabs = {
    videos: <Videocard/>,
    playlist: 'Playlist',
    about: 'About',
  };

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab') || 'videos';
  const [active, setActive] = useState(tab || "videos");



  return (
    <>
    <div className="text-white flex items-center mx-2 border-b-2 border-ternary text-xl h-12">
      {Object.keys(tabs).map((tabName) => (
        <div
          key={tabName}
          className={`w-20 h-12 cursor-pointer flex items-center justify-center -mb-[2px] mr-4 ml-12 border-b-3 border-transparent hover:border-b-highlight ${active === tabName ? "border-b-highlight" : ""
            }`}
          onClick={() => {
            setActive(tabName);
            navigate(`?tab=${tabName}`);
          }}>
          {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
        </div>
      ))}
    </div>
    <div className='mx-2 my-4'>
      
    </div>
    </>
  )
}

export default ChannelTabs