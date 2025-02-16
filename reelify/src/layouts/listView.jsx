import PropTypes from "prop-types" 

const Listview = ({showDesc,width}) => {
    const data = [
        {
            title: "Damru 2024",
            views : "24" ,
            uploadTime : "3" ,
            username : "Shrage" ,
            description : "In this video, I have talked about experiences of past 7 months in NST-RU as a first year B.Tech undergraduate student. I've also talked about guide to NSAT and criteria for scholarship. So, make sure to watch full video !" ,
            thumbnail : "../../assets/thumbnails/t2.png" ,
            _id : "3123435452344325",
            userAvatar : "../../assets/avatar2.png"
        },
        {
            title: "Damru 2024",
            views : "24" ,
            uploadTime : "3" ,
            username : "Shrage" ,
            description : "In this video, I have talked about experiences of past 7 months in NST-RU as a first year B.Tech undergraduate student. I've also talked about guide to NSAT and criteria for scholarship. So, make sure to watch full video !" ,
            thumbnail : "../../assets/thumbnails/t2.png" ,
            _id : "3123435452344dqwdwe325",
            userAvatar : "../../assets/avatar2.png"
        },
        {
            title: "Damru 2024",
            views : "24" ,
            uploadTime : "3" ,
            username : "Shrage" ,
            description : "In this video, I have talked about experiences of past 7 months in NST-RU as a first year B.Tech undergraduate student. I've also talked about guide to NSAT and criteria for scholarship. So, make sure to watch full video !" ,
            thumbnail : "../../assets/thumbnails/t2.png" ,
            _id : "31234354523443ewfe2325",
            userAvatar : "../../assets/avatar2.png"
        },
        {
            title: "",
            views : "" ,
            uploadTime : "" ,
            username : "" ,
            description : "" ,
            thumbnail : "../../assets/thumbnails/t3.png" ,
            _id : ""
        },
        {
            title: "",
            views : "" ,
            uploadTime : "" ,
            username : "" ,
            description : "" ,
            thumbnail : "../../assets/thumbnails/t4.png" ,
            _id : ""
        },
        {
            title: "",
            views : "" ,
            uploadTime : "" ,
            username : "" ,
            description : "" ,
            thumbnail : "../../assets/thumbnails/t5.png" ,
            _id : ""
        },
        {
            title: "",
            views : "" ,
            uploadTime : "" ,
            username : "" ,
            description : "" ,
            thumbnail : "../../assets/thumbnails/t5.png" ,
            _id : ""
        }
    ]
    return (
        <>
            <div className="grid gap-0 h-[95%]">

            {data.map((videoData) => (
                
                <div className={`flex items-center mx-6 my-2 h-36 text-xs`} style={{ width }} key={videoData._id}>
                    <div className="w-[30%]">
                        <img src={videoData.thumbnail} className="rounded-xl"/>
                    </div>
                    <div className="flex flex-col px-4 h-[100%] w-[75%] justify-center">
                        <div className="h-[20%] text-primary lg:text-xl xl:text-2xl">{videoData.title}</div>
                        <div className="flex h-[20%] text-secondary 
                                           md: text-xs
                                           lg:text-xs 
                                           xl:mt-2 xl:-mb-1  xl:text-sm">
                            <div className="mr-2">{videoData.views}K views</div>
                            <span>.</span>
                            <div className="ml-2">{videoData.uploadTime} days ago</div>
                        </div>
                        <div className="flex items-center lg:h-[20%] mb-2 xl:h-[30%] lg:-mt-1 lg:mb-2 xl:my-0.5 lg:text-base xl:text-xl">
                            <img src={videoData.userAvatar} className="w-4 h-4 rounded-2xl mx-2"/>
                            <div className="text-secondary xl:text-base">{videoData.username}</div>
                        </div>
                        {showDesc && <div className="max-h-[30%] line-clamp-2 text-secondary lg:text-xs xl:text-sm">{videoData.description}</div>}
                    </div>
                </div>   
        )
    )}
    </div>
            
        </>
    )
}

Listview.propTypes = {
  showDesc: PropTypes.bool,
  width : PropTypes.string
};

export default Listview ;