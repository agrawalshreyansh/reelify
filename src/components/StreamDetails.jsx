import React from 'react'
import Switcher from './Swtichers'
import LikeDislikeButton from './LikeButton'

const StreamDetails = ({initialLikes,initialDislikes}) => {


    return (
        <div className=' mx-2 text-white'>

            <div className='flex w-[50%] my-4 mx-4 '>
                <LikeDislikeButton  initialLikes={initialLikes} initialDislikes={initialDislikes}/>
            </div>
            <div className='flex flex-col'>
            <h3 className='text-2xl py-4'>Up Next</h3>
            <div className='flex mb-4 justify-between mx-8'>
                <div className='pr-4 my-4'>
                    <h1 className='text-xl'>How to make Pizza</h1>
                    <span className='font-extralight text-base'>
                        <span>10K views</span>
                        <span>{' '}.{' '}</span>
                        <span>3 days ago</span>
                    </span>
                    <div className='flex w-[70%] justify-between mt-8'>
                        <h2>Autoplay</h2>
                        <Switcher />
                    </div>
                </div>
                <img src='/images/t1.jpg' className='h-36 rounded-xl' />
            </div>
            </div>

        </div>
    )
}

export default StreamDetails