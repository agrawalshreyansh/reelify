import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Extract active section from URL
    const getActiveFromURL = () => {
        const path = location.pathname;
        if (path === "/") return "Home";
        if (path === "/subscriptions") return "subs";
        if (path === "/SavedVideos") return "saved";
        if (path === "/watchHistory") return "videohistory";
        if (path === "/upload") return "upload";
        if (path === "/mychannel") return "myvideos";
        if (path === "/settings") return "settings";
        return "Home"; 
    };

    const [active, setActive] = useState(getActiveFromURL);

    useEffect(() => {
        setActive(getActiveFromURL());
    }, [location.pathname]);

    return (
        <div className="flex flex-col text-primary w-[15vw] items-center h-[92vh] py-5">
            <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                    ${active === 'Home' ? 'bg-highlight' : '' }`} 
                    onClick={() => navigate('/')}
                >Home</div>
                <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                    ${active === 'subs' ? 'bg-highlight' : '' }`} 
                    onClick={() => navigate('/subscriptions')}
                >Subscriptions</div>
            </div>
            <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                   ${active === 'saved' ? 'bg-highlight' : '' }`} 
                    onClick={() => navigate('/SavedVideos')}
                >Saved</div>
                <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                    ${active === 'videohistory' ? 'bg-highlight' : '' }`} 
                    onClick={() => navigate('/watchHistory')}
                >Watch History</div>
            </div>
            <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                    ${active === 'upload' ? 'bg-highlight' : '' }`} 
                    onClick={() => navigate('/upload')}
                >Upload Video</div>
                <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                    ${active === 'myvideos' ? 'bg-highlight' : '' }`} 
                    onClick={() => navigate('/mychannel')}
                >My Videos</div>
            </div>
            <div className="w-[100%] h-28 flex flex-col items-center justify-center border-highlight">
                <div className={`h-9 w-[75%] my-1 p-4 hover:bg-highlight flex items-center rounded-lg cursor-pointer 
                    ${active === 'settings' ? 'bg-highlight' : '' }`} 
                    onClick={() => navigate('/settings')}
                >Settings</div>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    active: PropTypes.string,
    setActive: PropTypes.func,
    setmyuserComponent: PropTypes.elementType
};

export default Sidebar;
