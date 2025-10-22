import React, { useEffect } from 'react'
import { Loader } from '../components'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import useFetchData from '../hooks/useFetchData';
import { AskLogin, SubscribedChannelList } from '../layouts';
import { Videocard } from '../components';



const Subscriptions = () => {

  const { isLoggedIn, authLoading } = useContext(UserContext);


  const { response, loading, fetch } = useFetchData('subscriptions/subscribedvideos', true);

  useEffect(() => {
    if (isLoggedIn) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);


  return (
    <div>
      <h1 className='text-4xl my-4 mx-2'>Subscriptions</h1>
      {(loading || authLoading) ? <Loader/> : isLoggedIn ? <>
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