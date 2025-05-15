import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='flex items-center justify-center h-[90vh] overflow-y-scroll'>
        <div className='w-[75%] text-white h-full '>
            {children}
        </div>
    </div>
  );
}

export default Container;
