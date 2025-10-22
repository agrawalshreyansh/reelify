import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';

const Input = () => {
  const [searchInput, setSearchInput] = useState('');
  const { setSearchQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchQuery(searchInput);
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className='w-full lg:w-[68%] relative'>
      <form onSubmit={handleSearch} className='relative'>
        <input
          type='text'
          placeholder='Search videos...'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className='bg-secondary text-highlight h-12 p-4 pr-12 rounded-2xl text-xl w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all'
        />
        <button
          type='submit'
          className='absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-white p-2 rounded-xl transition-all duration-200'
          aria-label='Search'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Input;