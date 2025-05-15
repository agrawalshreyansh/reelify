import React from 'react'
import { ChannelTabs,Button ,ChannelProfile, Videocard, Loader} from '../components'
import useFetchData from '../hooks/useFetchData';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Playlist,About, AskLogin } from '../layouts';
import UserContext from '../context/UserContext';
import { useContext } from 'react'; 

const Channel = () => {

  const { username } = useParams();

  const { user, isLoggedIn } = useContext(UserContext);

  const { statusCode, response, error, loading , fetch } = useFetchData(`videos/getVideos/${username}`, true)

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab')
  
    useEffect(() => {fetch();}
        , []);

  return (
    <div className="h-full overflow-y-scroll">
      {username === 'login' ? <AskLogin/> :
      <>
        <ChannelProfile /> 
        <ChannelTabs/>
        
        {loading ? <Loader/> : 
        (!tab || tab === 'videos') && <Videocard videos={response} />
      }
        {tab === 'playlist' && <Playlist/>}
        {tab === 'about' && <About/>}
        </>
      }
    </div>
  )
}

export default Channel