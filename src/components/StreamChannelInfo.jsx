import React,{useEffect,useState} from 'react'
import { toast } from 'react-toastify'
import usePostData from '../hooks/usePostData'
import { Button } from './index'


const StreamChannelInfo = ({ owner, subscribers, owner_image, isSubscribed, description }) => {

  const [subscribed, setSubscribed] = useState(false);

  const { data, error: err, isLoading, postData } = usePostData(`subscriptions/subscribeTo/${owner}`, true)

    useEffect(() => {
      if (data) {
        toast.success(data.data)
        if (data?.status === 200) {
          setSubscribed(p => !p)
        }
      }
    }, [data])
    
    useEffect(() => {
      if (err) {
        toast.error(err)
      }
    }, [err])

    useEffect(() => {
      if (typeof isSubscribed === 'boolean') {
        setSubscribed(isSubscribed);
      }
    }, [isSubscribed]);
    
    

  return (
    <div className='flex flex-col items-center justify-center text-white'>
      <img
        src={owner_image}
        className='h-32 w-32 rounded-full p-2 m-2 object-cover'
      />
      <div>
        <h1 className='text-2xl text-center'>{owner}</h1>
        <p className='text-center'>{subscribers} subscribers</p>
      </div>
      <div>
      <Button status={subscribed}
              text={`${subscribed ? 'Subscribed' : 'Subscribe'}`}
              cb={() => { postData(); }} />
      </div>
      <div className='w-full font-extralight text-sm'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default StreamChannelInfo