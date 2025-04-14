

import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

function Homegrid({ showChannelName, videos }) {



  const navigate = useNavigate()

  const openChannel = (path) => {
    navigate(`/user/${path}`)
  }

  const openVideo = (_id) => {
    navigate(`/playVideo/${_id}`)
  }

  console.log(videos)

  return (
    <>
      <div className="w-[85vw] h-[92vh] flex py-4 px-3 items-start ">
        <div className="grid grid-cols-1 gap-0 max-h-[100%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {videos.map((video) => {
            return (
              <>

                <div className="text-white py-2 pb-2 cursor-pointer">

                  <div onClick={() => { openVideo(video._id) }} className='px-2.5 '>
                    <img src={video.thumbnail} className="h-42 w-76 rounded-2xl" />
                  </div>

                  <div className='flex '>
                    {showChannelName && <div className='w-[16%] flex items-center justify-center'>

                    <img src={video.owner?.avatar || ""} className="w-10 h-10 rounded-full" />
                    </div>}
                    <div className='w-[84%]'>
                      <div className="px-4 text-xl text-primary">
                        <p>{video.title}</p>
                      </div>
                      <div className="flex items-center justify-between px-4 text-md text-secondary">
                        <p>{video.views} views</p>
                        <p> mins ago</p>
                      </div>
                      <div
                        className={`${showChannelName ? 'flex' : 'hidden'} items-center  px-4 text-md text-secondary font-bold hover:text-primary `}
                        onClick={() => { openChannel(video.owner?.username || "") }}>

                        <p>{video.owner?.username || ""}</p>
                      </div>

                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

Homegrid.propTypes = {
  showChannelName: PropTypes.bool,
  videos: PropTypes.array
};

export default Homegrid;



