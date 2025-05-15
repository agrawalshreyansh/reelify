import React from 'react'

const StreamRelatedVideo = () => {

    const data = [
        {
            title: 'Fade Away',
            views: '1K',
            createdAt: '3 days ago'
        },
        {
            title: 'Fade Away',
            views: '1K',
            createdAt: '3 days ago'
        },
        {
            title: 'Fade Away',
            views: '1K',
            createdAt: '3 days ago'
        }
    ]


    return (
        <div className='py-4 text-white'>
            <h1 className='text-base my-4'>Related Videos</h1>
            {data.map((d) => {
                return (
                    <div className='flex mb-4 w-full items-center justify-center'>
                        <div className='w-1/2 flex flex-col justify-center'> 
                            <h1 className='text-base'>{d.title}</h1>
                            <span className='font-extralight text-xs'>
                                <span>{d.views} views</span>
                                <span>{' '}.{' '}</span>
                                <span>{d.createdAt}</span>
                            </span>
                        </div>
                        <img src='/images/t1.jpg' className='h-20 rounded-xl' />
                    </div>
                )
            })}
        </div>
    )
}

export default StreamRelatedVideo