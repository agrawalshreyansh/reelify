import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FormatDate } from '../utils/dateUtils'
import {formatDuration } from '../utils/durationUtil'

const Videocard = ({videos=[]}) => {

    const navigate = useNavigate()
    
  return (
    <>
    <div className="grid grid-cols-1 gap-0 max-h-[90%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {videos?.map((video) => {

        return (
        
        <div className="text-white py-2 pb-2 " key={video._id}>
                <div onClick={() => {navigate(`/stream/${video._id}`)}} className='px-2.5 cursor-pointer'>
                    <img src={video.thumbnail} className="h-auto w-full aspect-[16/9] rounded-2xl" alt="Thumbnail"/>
                </div>
               
                <div className='p-2'>
                    <div className="px-4 text-white text-xl font-normal flex justify-between">
                        <span>{video.title}</span>
                        <p className='text-sm -translate-y-8 translate-x-2 bg-bg h-5 w-auto px-1 rounded-lg'>{formatDuration(video.duration)}</p>
                    </div>
                    <div className={'flex items-center  px-4 text-md text-highlight font-light cursor-pointer'}
                         onClick={() => {navigate(`/channel/${video.owner?.username}`)}}
                         >
                            {video.owner?.username || ""}
                    </div>
                    <div className="flex items-center px-4 text-md text-highlight gap-3 font-light">
                        <p>{video.views} views</p>
                        <p> · </p>
                        <p>{FormatDate(video.createdAt)}</p>
                    </div>
                </div>
            </div>
        )
        })}
        </div>
            </>
  )
}

export default Videocard