import React,{useEffect} from 'react'
import { Loader, Videocard } from '../components'
import useFetchData from '../hooks/useFetchData.js'

const CateogrizedVideo = () => {

    const VideoCategories = ["All",'Music','Podcasts',"Sports","Cars","Live","Unboxing"]

    const { statusCode, response, error,loading, fetch } = useFetchData('recommend/home', false);

    useEffect(() => {
        fetch()
    }
    , []);
  
    console.log(error);
    
    

    const Filters = () => {
        return VideoCategories.map((cat,i) => 
        (<p key={i} className='bg-secondary px-6 py-3 rounded-2xl'>{cat}</p>))
    }

    return (
        <div>
            {loading ? <Loader h='[20vh]'/> : <>
                <div className='flex justify-center font-bold py-8 gap-8 cursor-pointer'>
                    <Filters/>
                </div>
                <div className='flex overflow-x-scroll'>
                {statusCode === 200 ? <Videocard videos={response}/> : 
                    <p>{error}</p>
                }
                </div>
                </>}
        </div>
    )
}

export default CateogrizedVideo