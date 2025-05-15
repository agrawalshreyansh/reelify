import React, { useState, useEffect } from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import useFetchData from '../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { FormatDate } from '../utils/dateUtils';

const VideoPlayer = ({data}) => {

  const [isLoading, setLoading] = useState(false)
  const [err, setError] = useState(null)
  const [status, setStatus] = useState()

  const { id } = useParams()

  const { statusCode, response, error, fetch } = useFetchData(`videos/play/${id}`);

  useEffect(() => {
    fetch();
  }, []); 
  
  useEffect(() => {
    setError(error);
    setStatus(statusCode);
    setLoading(false);
  }, [response, error, statusCode]); 
  

  const videoOptions = {
    type: "video",
    sources: [
      {
        src: data?.videoFile,
        type: "video/mp4",
      },
    ],
    poster: data?.thumbnail
  };

  const Options = {
    autoplay: true,
    speed: { selected: 1, options: [0.25, 0.5, 1, 1.5, 2] }
  }


  return (
    <>
      {isLoading ? (<div className="w-[100%] flex items-center justify-center"><Loader /></div>) :
        <div className="w-full rounded-3xl aspect-video mt-4">
        {data?.videoFile ? (
          <Plyr source={videoOptions} options={Options} />
        ) : (
          <h1 className='text-center mt-32'>{err}</h1>
        )}
      </div>
      
      }
      <div className='my-4 mx-2 text-white'>
        <h1 className='text-2xl'>{data?.title}</h1>
        <span className='font-extralight'>
          <span>{data?.views} views</span>
          <span>{' '} . {' '}</span>
          <span>{FormatDate(data?.createdAt)}</span>
        </span>
      </div>
    </>
  )
}


export default VideoPlayer