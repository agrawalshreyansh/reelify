import React, { useEffect, useState } from 'react'
import { Button, Loader } from './index'
import useFetchData from '../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import usePostData from '../hooks/usePostData';
import { toast } from 'react-toastify';

const ChannelProfile = () => {

  const { username } = useParams();
  const { statusCode, response: channelData, error, loading, fetch } = useFetchData(`users/user/${username}`,true);

  const [isSubscribed, setIsSubscribed] = useState(false);

  const { data, error: err, isLoading, postData } = usePostData(`subscriptions/subscribeTo/${username}`, true)

  useEffect(() => {
    if (data) {
      toast.success(data.data)
      if (data?.status === 200) {
        setIsSubscribed(p => !p)
      }
    }
  }, [data])
  
  useEffect(() => {
    if (err) {
      toast.error(err)
    }
  }, [err])
  


  useEffect(() => {
    fetch()
  }
    , []);

  useEffect(() => {
    if (channelData) {
      setIsSubscribed(channelData?.isSubscribed || false)
    }
  }, [channelData])

  return (<>
    {error && <div className="text-white text-2xl flex items-center justify-center h-64">{error}</div>}
    {loading ? <Loader h='16' /> :
      channelData
      &&
      (<>
        <div className="px-2 h-[18vw] flex items-center justify-center">
          <img src={channelData.coverImage} className="rounded-2xl max-h-full" />
        </div>

        <div className="flex items-center px-12 w-[85vw] text-sm h-40">
          <div className="md:h-[16vw] md:w-[16vw] xl:h-[10vw] xl:w-[10vw] flex items-center justify-center rounded-full border-1 border-ternary overflow-hidden">
            <img
              src={channelData.avatar}
              className="w-full h-full object-contain"
              alt="avatar"
            />
          </div>
          <div className="text-white flex flex-col justify-end px-8 ">
            <h3 className="xl:text-2xl md:text-xl sm:text-sm text-base text-white font-bold">
              {channelData.fullName}
            </h3>
            <p className="text-sm font-extralight">@{channelData.username}</p>
            <div className="md:text-sm text-xs font-extralight">
              <span>{channelData.subscribersCount} subscribers</span>
              <span> . </span>
              <span>{channelData.channelsSubscribedToCount} subscribed</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[30%]">
            <Button status={isSubscribed}
              text={`${isSubscribed ? 'Subscribed' : 'Subscribe'}`}
              cb={() => { postData(); }} />
          </div>
        </div>
      </>)
    }
  </>
  )
}

export default ChannelProfile