import React from 'react'

const videoDetails = () => {
  return (
    <div>
         <div className="text-white my-2 mx-4">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="text-primary text-2xl">{data.title}</div>
                      <div className="flex text-secondary text-sm">
                        <span>{data.views} views</span>
                        <span> . </span>
                        <span>{uploadDate}</span>
                      </div>
                    </div>
                    <div className="flex w-52 justify-between mr-24">

                      <div className="flex justify-between w-28  h-14 bg-secondary rounded-2xl">
                        <div className="p-1 hover:bg-primary rounded-l-2xl">
                          <button className=" w-10 h-8 flex ml-2" onClick={() => {}}>
                            <img src="../assets/like.png" />
                          </button>
                          <p className="text-center text-black">{likes}</p>
                        </div>
                        <div className="p-1 hover:bg-primary rounded-r-2xl ">
                          <button className=" w-10 h-8 flex ml-2"
                            onClick={() => increaseDislike(data._id)}>
                            <img src="../assets/like.png" className="rotate-180" />
                          </button>
                          <p className="text-center text-black">{dislikes}</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button className="bg-secondary hover:bg-primary p-3 w-14 h-14 rounded-xl mr-4"><img src="../assets/share.png" onClick={() => {navigator.clipboard.writeText(window.location.href);toast.success('Video URL Copied')}}/></button>
                        {/* <button className="bg-secondary p-2 w-10 rounded-xl"><img src="../assets/save-instagram.png" /></button> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between m-4">
                    <div className=" flex items-center ">
                      <img src={data.owner_image} className="w-12 h-12 rounded-full border-2 border-primary" />
                      <div className="flex flex-col justify-center w-28 ml-4 cursor-pointer" onClick={() => { navigate(`/user/${data.owner}/videos`) }}>
                        <p className="text-lg">{data.owner}</p>
                        <p className="text-xs">{data.subscribers}</p>
                      </div>
                      <SubscribeButton subscribedStatus={subscribedStatus} owner={data.owner} />
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
                <div className="border-1 border-secondary mx-4 text-white "></div>
                <div className="text-primary mx-4 ">
                  <p className="text-xl">Description</p>
                  <div className="h-32 m-2">
                    <p>{data.description}</p>
                  </div>
                </div>
                <div className="border-1 border-secondary mx-4 text-white"></div>
                <div className="text-primary mx-4">
                  Comments...
                </div>
    </div>
  )
}

export default videoDetails