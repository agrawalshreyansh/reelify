import React, { useEffect, useState } from 'react'
import { VideoPlayer, StreamChannelInfo, StreamRelatedVideo, StreamDetails } from '../components'
import useFetchData from '../hooks/useFetchData'
import { useParams } from 'react-router-dom';
import { title } from 'motion/react-client';

const Stream = () => {

  const { id } = useParams()
  const { x, y, z, fetch: history } = useFetchData(`videos/${id}/updateHistory`, true)

  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [err, setError] = useState(null)
  const [status, setStatus] = useState()

  const { statusCode, response, error, fetch } = useFetchData(`videos/play/${id}`,true);

  useEffect(() => {
    fetch();
    history()
  }, []);

  useEffect(() => {
    setData(response);
    setError(error);
    setStatus(statusCode);
    setLoading(false);
  }, [response, error, statusCode]);

  return (
    <div className=''>
      <div className='flex px-8 h-[90vh] overflow-y-scroll'>
      {response &&   <div className='flex flex-col w-[75%]'>
          <VideoPlayer video={response?.videoFile} 
                        data = {{videoFile : response?.videoFile, title : response?.title, thumbnail : response?.thumbnail,views : response?.views, createdAt : response?.createdAt}}
                        />
           <StreamDetails  
                          initialLikes={response?.likeCount ?? 0} 
                          initialDislikes={response?.dislikeCount ?? 0}
                          
                          />
        </div>}

        <div className='flex flex-col px-4 w-[25%]'>
          <StreamChannelInfo owner={response?.owner}
                            subscribers={response?.subscribers}
                            owner_image={response?.owner_image}
                            isSubscribed={response?.isSubscribed}
                            description={response?.description} />
          <StreamRelatedVideo />
        </div>
      </div>

    </div>
  )
}

export default Stream