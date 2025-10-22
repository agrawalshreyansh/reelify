import React, { useState, useContext, useRef, useEffect } from 'react';
import Login from './Login';
import UserContext from '../context/UserContext';
import { toast } from 'react-toastify';
import { BASE_URL } from '../constants';

const Profile = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  const { user, isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      setMenuOpen(!menuOpen);
    } else {
      setLoginOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      // Call logout API
      const response = await fetch(`${BASE_URL}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setUser(null);
        setIsLoggedIn(false);
        setMenuOpen(false);
        toast.success('Logged out successfully!');
      } else {
        toast.error('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout.');
    }
  };

  return (
    <>
      <div className='relative' ref={menuRef}>
        <div 
          className='h-12 w-12 bg-secondary rounded-full p-2 cursor-pointer hover:ring-2 hover:ring-highlight transition-all overflow-hidden' 
          onClick={handleProfileClick}
        >
          <img 
            src={isLoggedIn && user?.avatar ? user.avatar : '/icons/user.png'} 
            alt="Profile"
            className='h-full w-full object-cover rounded-full' 
          />
        </div>

        {/* Dropdown Menu */}
        {menuOpen && isLoggedIn && (
          <div className='absolute right-0 mt-2 w-48 bg-secondary border border-ternary rounded-lg shadow-lg z-50 overflow-hidden'>
            <div className='px-4 py-3 border-b border-ternary'>
              <p className='text-sm font-semibold text-white truncate'>{user?.fullName || user?.username}</p>
              <p className='text-xs text-gray-400 truncate'>@{user?.username}</p>
            </div>
            
            <button
              onClick={handleLogout}
              className='w-full text-left px-4 py-3 hover:bg-ternary transition-colors text-red-400 flex items-center gap-2'
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        )}
      </div>

      <Login open={loginOpen} setOpen={setLoginOpen}/>
    </>
  )
}

export default Profile