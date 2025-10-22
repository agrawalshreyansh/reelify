import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo, NavPages, Input, Upload, Profile } from '../components/index'
import UserContext from '../context/UserContext'
import { toast } from 'react-toastify'
import { BASE_URL } from '../constants'

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await fetch(`${BASE_URL}/users/logout`, {
                method: 'POST',
                credentials: 'include',
            })

            if (response.ok) {
                setUser(null)
                setIsLoggedIn(false)
                setIsMobileMenuOpen(false)
                toast.success('Logged out successfully!')
                navigate('/')
            } else {
                toast.error('Logout failed. Please try again.')
            }
        } catch (error) {
            console.error('Logout error:', error)
            toast.error('An error occurred during logout.')
        }
    }

    return (
        <nav className='flex flex-col md:flex-row items-center justify-between text-white min-h-[10vh] border-b-1 border-white px-4 py-2 md:py-0'>
            {/* Main navbar content */}
            <div className='flex items-center justify-between w-full md:w-auto'>
                <div className='flex items-center gap-4 md:w-auto'>
                    <Logo />
                    {/* Desktop & Tablet NavPages */}
                    <div className='hidden md:flex'>
                        <NavPages />
                    </div>
                </div>
                
                {/* Mobile menu button */}
                <button 
                    className='md:hidden p-2 hover:bg-secondary rounded-lg transition-colors'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Desktop & Tablet right section */}
            <div className='hidden md:flex gap-4 xl:gap-6 items-center'>
                <Input />
                <Upload />
                <Profile />
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden w-full flex flex-col gap-4 py-4 border-t border-secondary mt-2'>
                    <NavPages />
                    <div className='flex flex-col gap-3 px-2'>
                        <Input />
                        <div className='flex gap-4 justify-start items-center'>
                            <Upload />
                            {isLoggedIn && (
                                <button
                                    onClick={handleLogout}
                                    className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-2'
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar