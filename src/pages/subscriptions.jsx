import React, { useEffect } from 'react'
import { Loader } from '../components'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import useFetchData from '../hooks/useFetchData';
import { AskLogin, SubscribedChannelList } from '../layouts';
import { Videocard } from '../components';



const Subscriptions = () => {

  const { isLoggedIn } = useContext(UserContext);

  console.log(isLoggedIn)

  const { statusCode, response, error,loading, fetch } = useFetchData('subscriptions/subscribedvideos', true);

  useEffect(() => {
    fetch();
  }
    , []);


  return (
    <div>
      <h1 className='text-4xl my-4 mx-2'>Subscriptions</h1>
      {loading ? <Loader/> : isLoggedIn ? <>
        <SubscribedChannelList />
        <h2 className='text-2xl px-2 py-4'>New from your subscriptions</h2>
        <Videocard videos={response} />
        <h2 className='text-2xl px-2 py-4'>Recently from your subscriptions</h2>
        <Videocard videos={response} />
      </> : <AskLogin/>}
    </div>

  )
}

export default Subscriptions