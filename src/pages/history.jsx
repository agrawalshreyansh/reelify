import React, { useEffect, useState } from 'react'
import Videolist from '../components/videolist'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import useFetchData from '../hooks/useFetchData';
import { AskLogin } from '../layouts';
import { Loader } from '../components';



const History = () => {

  const { user, isLoggedIn } = useContext(UserContext);

  const { statusCode, response, error, loading, fetch } = useFetchData('videos/history', true);
  
  useEffect(() => {
    if (isLoggedIn) {
      fetch();
    }
  }, [isLoggedIn]);


  return (
    <div className='mx-8'>
        <h1 className='text-3xl mx-4 my-8'>History</h1>
        {loading ? <Loader/> : isLoggedIn ? 
          response &&  response.map((d) => <Videolist videoData={d} key={d._id}/> )
          :  <AskLogin/>
          }
    </div>
  )
}

export default History