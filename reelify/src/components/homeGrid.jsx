import {useNavigate} from 'react-router-dom';
import PropTypes from "prop-types";

function Homegrid({showChannelName}) {
  const data = [
    {
      src: "../assets/thumbnails/t1.png",
      views: "100K",
      uploadTime: "10",
      ChannelName: "Shrage",
      title: "Damru",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t2.png",
      views: "200K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Damru 2",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t3.png",
      views: "150K",
      uploadTime: "30",
      ChannelName: "Shrage",
      title: "NST",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t4.png",
      views: "300K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Haridwar",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t5.png",
      views: "300K",
      uploadTime: "50",
      ChannelName: "Shrage",
      title: "Haridwar 2",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t5.png",
      views: "300K",
      uploadTime: "50",
      ChannelName: "Shrage",
      title: "Haridwar 2",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t1.png",
      views: "100K",
      uploadTime: "10",
      ChannelName: "Shrage",
      title: "Damru",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t2.png",
      views: "200K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Damru 2",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t3.png",
      views: "150K",
      uploadTime: "30",
      ChannelName: "Shrage",
      title: "NST",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t4.png",
      views: "300K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Haridwar",
    },
    {
      src: "../assets/thumbnails/t5.png",
      views: "300K",
      uploadTime: "50",
      ChannelName: "Shrage",
      title: "Haridwar 2",
      _id : "1312432345234"
    },
    {
      src: "../assets/thumbnails/t5.png",
      views: "300K",
      uploadTime: "50",
      ChannelName: "Shrage",
      title: "Haridwar 2",
      _id : "1312432345234"
    },
  ];

  const navigate = useNavigate()

  const openChannel = (path) => {
    navigate(`/user/${path}`)
  }

  const openVideo = (_id) => {
    navigate(`/playVideo/${_id}`)
  }

  console.log(showChannelName)

  return (
    <>
      <div className="w-[85vw] h-[92vh] flex py-4 justify-center items-center ">
        <div
          className="flex flex-wrap max-h-[98%] w-[98%]"
        >
          {data.map((video) => {
            return (
              <>
                <div className="h-58 w-78 text-white py-2 mb-[20px] cursor-pointer">
                  <div onClick={() => {openVideo(video._id)}} className='px-4'>
                    <img src={video.src} className=" object-cover rounded-2xl" />
                  </div>
                  <div className="px-4 text-xl text-primary">
                    <p>{video.title}</p>
                  </div>
                  <div className="flex items-center justify-between px-4 text-md text-secondary">
                    <p>{video.views} views</p>
                    <p>{video.uploadTime} mins ago</p>
                  </div>
                  <div
                    className={`${showChannelName === true ? "flex" : "hidden"} items-center justify-between px-4 text-md text-secondary font-bold hover:text-primary `}
                    onClick={() => {openChannel(video.ChannelName)}}>
                    <p>{video.ChannelName}</p>
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
};

export default Homegrid;
