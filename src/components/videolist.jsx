import React from 'react'
import { FormatDate } from '../utils/dateUtils'
import { formatDuration } from '../utils/durationUtil';
import { useNavigate } from 'react-router-dom'
import usePostData from '../hooks/usePostData';

const Videolist = ({videoData}) => {
    
    const navigate = useNavigate()

    const { data, error, isLoading, postData } = usePostData('users/deletehistory',true);

    const deleteVideo = async (id) => {
        postData({historyId : id})
        setTimeout(() => {
            window.location.reload();
        }, 100);
        
    }

    return (
        <div>
            <div
                className={`flex items-center justify-between my-2 h-36 text-xs`}
                key={videoData._id}>
                <div className='flex items-center h-full'>
                    <div className="w-[24%] cursor-pointer" onClick={() => {navigate(`/stream/${videoData._id}`)}}>
                        <img src={videoData.thumbnail} className="rounded-xl h-auto w-full object-cover aspect-[16/9]" />
                    </div>
                    <div className="flex flex-col px-4 h-full w-[40%] justify-center">
                        <div className="h-[30%] text-white text-2xl flex items-center">
                            {videoData.title}
                        </div>
                        <div className='h-[25%] flex items-center'>
                            <span className='text-highlight text-base'>{formatDuration(videoData.duration)}</span>
                        </div>
                        <div className="flex h-[25%] text-highlight text-base items-center ">
                            <span className="mr-2 cursor-pointer" onClick={() => { navigate(`/channel/${videoData.owner?.username}`)}}>{videoData.owner.username}</span>
                            <span>·</span>
                            <span className="mx-2">{videoData.views} views</span>
                            <span>·</span>
                            <span className="ml-2">{FormatDate(videoData.createdAt)}</span>
                        </div>
                    </div>
                </div>
                <div className='text-5xl  font-light pr-16 cursor-pointer' onClick={() => deleteVideo(videoData._id)}>
                <p className='rotate-45 transition-transform duration-200 hover:scale-125 active:scale-90'>+</p>

                </div>
            </div>
        </div>
    )
}

export default Videolist