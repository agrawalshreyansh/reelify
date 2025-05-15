import React from 'react'
import useFetchData from '../hooks/useFetchData';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SubscribedChannelList = () => {

    const { statusCode, response, error, fetch } = useFetchData('subscriptions/mysubscriptions', true);

    const navigate = useNavigate()

    useEffect(() => {
        fetch();
    }
        , []);


    return (
        <div>
            {response &&
                <div className='flex my-4' >
                    {response.subscribedTo.map((channel) => (
                        <div key={channel._id} className='flex flex-col w-1/10 py-4 items-center text-white rounded-xl cursor-pointer shadow hover:bg-secondary' onClick={() => navigate(`/channel/${channel.username}`)}>
                            <img src={channel.avatar} 
                                    alt={channel.username} 
                                    className='h-20 w-20 object-cover rounded-full mb-2' />
                            <h2 className='text-lg text-center px-1'>{channel.username}</h2>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default SubscribedChannelList