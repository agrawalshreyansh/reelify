const SavedVideosGrid = () => {

    const data = [
        {
            playlistName : 'Javascript',
            _id:1
        },
        {
            playlistName : 'Django',
            _id:2
        },
        {
            playlistName : 'MERN',
            _id:3
        },
        {
            playlistName : 'CSS',
            _id:4
        },
        {
            playlistName : 'Javascript',
            _id:5
        },
        {
            playlistName : 'Django',
            _id:6
        },
        {
            playlistName : 'MERN',
            _id:7
        },
        {
            playlistName : 'CSS',
            _id:8
        },
        
        
    ]


    return (
        <>
        <div className="h-[92vh] w-[85vw]">
            <div className="grid grid-cols-4 gap-4 auto-rows-auto items-start px-12 py-16">
                {data.map((playlist) => {
                return (    
                    <div className="h-40 flex justify-center hover:bg-highlight hover:cursor-pointer rounded-2xl" key={playlist._id}>
                        <div className="w-[60%]">
                            <img src="/assets/folder.svg " className="absolute "/>
                            <div className="relative top-20 left-6 text-center w-[108px]">
                                <h2 className="text-2xl text-black ">{playlist.playlistName}</h2>
                            </div>
                        </div>
                    </div>   
                )
            })}
            </div>
        </div>
        </>
    )
}

export default SavedVideosGrid ;