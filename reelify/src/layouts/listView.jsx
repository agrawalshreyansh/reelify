import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Listview = ({ showDesc, width, data }) => {

  const navigate = useNavigate()

  const openChannel = (path) => {
    navigate(`/user/${path}`)
  }

  const openVideo = (_id) => {
    navigate(`/playVideo/${_id}`)
  }

  return (
    <>
      {data.length === 0 ? (
        <h2 className="text-white flex items-center justify-center h-[50%]">
          No History Exists !
        </h2>
      ) : (
        <div className="grid gap-0 h-[95%]">
          {data.map((videoData) => (
            <div
              className={`flex items-center mx-6 my-2 h-36 text-xs`}
              style={{ width }}
              key={videoData._id}
            >
              <div className="w-[30%]" onClick={() => {openVideo(videoData._id)}}>
                <img src={videoData.thumbnail} className="rounded-xl" />
              </div>
              <div className="flex flex-col px-4 h-[100%] w-[75%] justify-center">
                <div className="h-[20%] text-primary lg:text-xl xl:text-2xl">
                  {videoData.title}
                </div>
                <div
                  className="flex h-[20%] text-secondary 
                                           md: text-xs
                                           lg:text-xs 
                                           xl:mt-2 xl:-mb-1  xl:text-sm"
                >
                  <div className="mr-2">{videoData.views} views</div>
                  <span>.</span>
                  <div className="ml-2">{videoData.uploadTime} days ago</div>
                </div>
                <div className="flex items-center lg:h-[20%] mb-2 xl:h-[30%] lg:-mt-1 lg:mb-2 xl:my-0.5 lg:text-base xl:text-xl">
                  <img
                    src={videoData.owner.avatar}
                    className="w-4 h-4 rounded-2xl mx-2"
                  />
                  <div className="text-secondary xl:text-base" onClick={openChannel(videoData.username)}>
                    {videoData.owner.username}
                  </div>
                </div>
                {showDesc && (
                  <div className="max-h-[30%] line-clamp-2 text-secondary lg:text-xs xl:text-sm">
                    {videoData.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

Listview.propTypes = {
  showDesc: PropTypes.bool,
  width: PropTypes.string,
  data: PropTypes.array,
};

export default Listview;
