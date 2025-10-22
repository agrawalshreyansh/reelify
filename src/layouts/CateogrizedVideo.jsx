import React,{useEffect, useState} from 'react'
import { Loader, Videocard } from '../components'
import useFetchData from '../hooks/useFetchData.js'
import { VIDEO_CATEGORIES_FILTER } from '../constants.js'

const CateogrizedVideo = () => {

    const [selectedCategory, setSelectedCategory] = useState("All")
    const [currentPage, setCurrentPage] = useState(1)

    const { statusCode, response, error,loading, fetch } = useFetchData(`recommend/home?page=${currentPage}`, false);

    useEffect(() => {
        fetch()
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory]);

    
    const getFilteredVideos = () => {
        const videos = response?.videos || [];
        
        if (!Array.isArray(videos)) return [];
        
        if (selectedCategory === "All") {
            return videos;
        }
        
        return videos.filter(video => 
            video.category?.toLowerCase() === selectedCategory.toLowerCase()
        );
    }

    const Filters = () => {
        return VIDEO_CATEGORIES_FILTER.map((cat,i) => 
        (<p 
            key={i} 
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base rounded-2xl transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                i === 0 ? 'ml-4' : ''
            } ${
                i === VIDEO_CATEGORIES_FILTER.length - 1 ? 'mr-4' : ''
            } ${
                selectedCategory === cat 
                    ? 'bg-primary text-white font-bold' 
                    : 'bg-secondary hover:bg-primary/50'
            }`}
        >
            {cat}
        </p>))
    }

    const filteredVideos = getFilteredVideos();
    
    const paginationInfo = response?.pagination || {};
    const totalPages = paginationInfo.totalPages || 1;

    const PaginationButtons = () => {
        console.log('=== PAGINATION DEBUG ===');
        console.log('Current Page:', currentPage);
        console.log('Total Pages:', totalPages);
        console.log('Pagination Info:', paginationInfo);
        console.log('======================');
        
        return (
            <div className="flex justify-center items-center gap-2 py-8">
                <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage <= 1}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                        currentPage <= 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-secondary hover:bg-primary hover:text-white'
                    }`}
                >
                    Previous
                </button>

                <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1
                        if (
                            pageNumber === 1 ||
                            pageNumber === totalPages ||
                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                        ) {
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                        currentPage === pageNumber
                                            ? 'bg-primary text-white font-bold'
                                            : 'bg-secondary hover:bg-primary/50'
                                    }`}
                                >
                                    {pageNumber}
                                </button>
                            )
                        } else if (
                            pageNumber === currentPage - 2 ||
                            pageNumber === currentPage + 2
                        ) {
                            return <span key={pageNumber} className="px-2 py-2">...</span>
                        }
                        return null
                    })}
                </div>

                <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage >= totalPages}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                        currentPage >= totalPages
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-secondary hover:bg-primary hover:text-white'
                    }`}
                >
                    Next
                </button>
            </div>
        )
    }
    
    console.log('Filtered Videos:', filteredVideos);
    console.log('Filtered Videos Length:', filteredVideos.length);
    console.log('Total Pages:', totalPages);
    console.log('Current Page:', currentPage);

    return (
        <div>
            {loading ? <Loader h='[20vh]'/> : <>
                <div className='overflow-x-auto scrollbar-hide py-4 md:py-8'>
                    <div className='flex justify-start lg:justify-center font-bold gap-3 md:gap-8 cursor-pointer'>
                        <Filters/>
                    </div>
                </div>
                <div className='flex overflow-x-scroll'>
                {statusCode === 200 ? (
                    filteredVideos.length > 0 ? (
                        <Videocard videos={filteredVideos}/>
                    ) : (
                        <div className='w-full text-center py-12 text-highlight text-xl'>
                            No videos found in "{selectedCategory}" category
                        </div>
                    )
                ) : (
                    <p>{error}</p>
                )}
                </div>
                
                {statusCode === 200 && filteredVideos.length > 0 && (
                    <PaginationButtons />
                )}
                </>}
        </div>
    )
}

export default CateogrizedVideo