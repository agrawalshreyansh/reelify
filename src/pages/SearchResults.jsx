import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
import { Loader, Videocard } from '../components';
import useFetchData from '../hooks/useFetchData';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { setSearchQuery } = useContext(SearchContext);
    const [currentPage, setCurrentPage] = useState(1);
    
    const { statusCode, response, error, loading, fetch } = useFetchData(
        `recommend/search?query=${encodeURIComponent(query)}&page=${currentPage}`,
        false
    );

    useEffect(() => {
        setSearchQuery(query);
        if (query) {
            fetch();
        }
    }, [query, currentPage, setSearchQuery]);

    const videos = response?.videos || [];
    const paginationInfo = response?.pagination || {};
    const totalPages = paginationInfo.totalPages || 1;

    const PaginationButtons = () => {
        if (totalPages <= 1) return null;
        
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
                        const pageNumber = index + 1;
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
                            );
                        } else if (
                            pageNumber === currentPage - 2 ||
                            pageNumber === currentPage + 2
                        ) {
                            return <span key={pageNumber} className="px-2 py-2 text-highlight">...</span>;
                        }
                        return null;
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
        );
    };

    return (
        <div className="min-h-screen">
            <div className="py-8 px-4">
                <h1 className="text-white text-3xl font-bold mb-2">
                    Search Results for "{query}"
                </h1>
                <p className="text-highlight text-lg mb-6">
                    {!loading && videos.length > 0 && `Found ${paginationInfo.totalVideos || videos.length} video(s)`}
                </p>
            </div>

            {loading ? (
                <Loader h="[20vh]" />
            ) : (
                <>
                    {statusCode === 200 ? (
                        videos.length > 0 ? (
                            <>
                                <div className="px-4">
                                    <Videocard videos={videos} />
                                </div>
                                <PaginationButtons />
                            </>
                        ) : (
                            <div className="w-full text-center py-12 text-highlight text-xl">
                                <p className="mb-4">No videos found for "{query}"</p>
                                <p className="text-sm">Try searching with different keywords</p>
                            </div>
                        )
                    ) : (
                        <div className="w-full text-center py-12 text-red-400 text-xl">
                            <p>{error || 'An error occurred while searching'}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default SearchResults;
