import React from 'react'
import { Logo, NavPages, Input, Upload, Profile } from '../components/index'

function Navbar() {
    return (
        <nav className='flex items-center justify-between text-white h-[10vh] border-b-1 border-white'>
            <div className='flex w-1/2'>
                <Logo />
                <NavPages />
            </div>
            <div className='flex w-1/3 gap-6 justify-end'>
                <Input />
                <Upload />
                <Profile />
            </div>
        </nav>
    )
}

export default Navbar