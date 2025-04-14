import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Navbar() {

  const navigate = useNavigate()

  const loginStatus = () => {
      navigate('/signup')
  }

  const goHome = () => {
    navigate('/')
  }

  const userProfile = localStorage.getItem('avatar')
  const [avatar, setAvatar] = useState()

  const [isLoggedIn, setLoggedIn] = useState(false)

  const userLogOut = async () => {

    
      try {
        const response = await axios.post("https://reelify-backend.onrender.com/api/v1/users/logout",{}, {withCredentials: true,})
        console.log(response)
        localStorage.removeItem("fullName")
        localStorage.removeItem("coverImage")
        localStorage.removeItem("avatar")
        localStorage.removeItem("username")
        localStorage.removeItem("email")
        localStorage.removeItem("userId")
        setLoggedIn(false)
        
        navigate('/')

      } catch (error) {
          console.error(error)
      }
  }

  useEffect(() => {

    if (localStorage.getItem('username')) {
      setLoggedIn(true)
    }

    if (isLoggedIn) {
      setAvatar(userProfile)
    }
    else {
      setAvatar("/assets/user.png")
    }
  },[userProfile,isLoggedIn])
    


  return (
    <div className="flex items-center justify-center h-[8vh]">
      <div>
        <img src="/assets/menu.png" className="h-5 w-6 ml-8"/>
      </div>
      <div className="flex mr-auto items-center justify-center cursor-pointer" onClick={() => goHome()}>
        <img src="/assets/logo.png" alt="Logo" className="h-10 w-11 ml-4" />
        <p className="text-primary text-2xl">Reelify</p>
      </div>
      <div>
        <input 
            placeholder="Search" 
            type="text" 
            className="text-primary border-2 border-secondary h-10 w-[36vw] rounded-3xl p-3 focus:outline-none" />
      </div>
      <div className="flex ml-auto items-center justify-center">
            <button className="text-secondary border-highlight mr-5 cursor-pointer flex items-center" onClick={() => isLoggedIn ? userLogOut() :  loginStatus()}>
                <span className="mr-2 text-lg text-primary">{isLoggedIn ? 'LogOut' : 'Sign Up'}</span>
                <img className="h-8 w-8 mr-8 rounded-full" src={avatar}/>
            </button>
      </div>
    </div>
  );
}

export default Navbar;
