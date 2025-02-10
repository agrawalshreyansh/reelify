import {useNavigate} from 'react-router-dom';


function Videogrid() {
  const data = [
    {
      src: "assets/thumbnails/t1.png",
      views: "100K",
      uploadTime: "10",
      ChannelName: "Shrage",
      title: "Damru",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t2.png",
      views: "200K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Damru 2",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t3.png",
      views: "150K",
      uploadTime: "30",
      ChannelName: "Shrage",
      title: "NST",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t4.png",
      views: "300K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Haridwar",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t5.png",
      views: "300K",
      uploadTime: "50",
      ChannelName: "Shrage",
      title: "Haridwar 2",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t5.png",
      views: "300K",
      uploadTime: "50",
      ChannelName: "Shrage",
      title: "Haridwar 2",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t1.png",
      views: "100K",
      uploadTime: "10",
      ChannelName: "Shrage",
      title: "Damru",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t2.png",
      views: "200K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Damru 2",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t3.png",
      views: "150K",
      uploadTime: "30",
      ChannelName: "Shrage",
      title: "NST",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t4.png",
      views: "300K",
      uploadTime: "20",
      ChannelName: "Shrage",
      title: "Haridwar",
    },
    {
      src: "assets/thumbnails/t5.png",
      views: "300K",
      uploadTime: "50",
      ChannelName: "Shrage",
      title: "Haridwar 2",
      _id : "1312432345234"
    },
    {
      src: "assets/thumbnails/t5.png",
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

  return (
    <>
      <div className="w-[88vw] h-[92vh] flex py-4 justify-center items-center ">
        <div
          className="flex flex-wrap max-h-[98%] w-[98%] overflow-y-scroll [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {data.map((video) => {
            return (
              <>
                <div className="h-[200px] w-[260px] text-white py-2 mb-[20px]">
                  <div onClick={() => {openVideo(video._id)}} className='cursor-pointer'>
                    <img src={video.src} className="px-4 " />
                  </div>
                  <div className="px-4 text-xl text-primary">
                    <p>{video.title}</p>
                  </div>
                  <div className="flex items-center justify-between px-4 text-md text-secondary">
                    <p>{video.views} views</p>
                    <p>{video.uploadTime} mins ago</p>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 text-md text-secondary font-bold cursor-pointer hover:text-primary"
                    onClick={() => {openChannel(video.ChannelName)}}
                  >
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

export default Videogrid;
