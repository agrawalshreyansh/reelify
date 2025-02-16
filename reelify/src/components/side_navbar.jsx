import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {

    const [active, setActive] = useState('Home')

    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col text-primary w-[15vw] items-center h-[92vh] py-5">
                <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                    <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                        ${active === 'Home' ? 'bg-highlight' : '' }`} 
                        onClick={() => { setActive('Home') ; navigate('/') } }
                        >Home</div>
                    <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                                    ${active === 'subs' ? 'bg-highlight' : '' }`} 
                                    onClick={() => { setActive('subs'); navigate('/subscriptions')} }
                                    >Subscriptions</div>
                </div>
                <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                    <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                       ${active === 'saved' ? 'bg-highlight' : '' }`} 
                        onClick={() => { setActive('saved'); navigate('/SavedVideos')} }
                        >Saved</div>
                    <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                        ${active === 'videohistory' ? 'bg-highlight' : '' }`} 
                        onClick={() => { setActive('videohistory'); navigate('/watchHistory')} }
                        >Watch History</div>
                </div>
                <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                    <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                        ${active === 'upload' ? 'bg-highlight' : '' }`} 
                        onClick={() => { setActive('upload'); navigate('/upload')}}
                        >Upload Video</div>
                    <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                        ${active === 'myvideos' ? 'bg-highlight' : '' }`} 
                        onClick={() => { setActive('myvideos'); navigate('/mychannel')} }
                        >My Videos</div>
                    
                </div>
                <div className="w-[100%] h-28 flex flex-col items-center justify-center border-highlight">
                    <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                        ${active === 'settings' ? 'bg-highlight' : '' }`} 
                        onClick={() => { setActive('settings'); navigate('/settings') } }
                        >Settings</div>
                </div>
            </div>
        </>
    )
}

Sidebar.propTypes = {
    active: PropTypes.string,
    setActive: PropTypes.func,
    setmyuserComponent: PropTypes.elementType
  };
  

export default Sidebar;

