import Homegrid from "./homeGrid";


const SubscriptionGrid = () => {

    const data = [
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 1
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 2
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 3
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 4
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 5
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 1
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 2
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 3
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 4
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 5
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 1
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 2
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 3
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 4
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 5
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 1
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 2
        },
        {
            img : '/assets/avatar2.png' ,
            channelName : 'Shrage' ,
            _id : 3
        },
        
    ]


    return (
        <>
            <div className="text-white">
                <div className="flex items-center py-4 overflow-x-scroll mx-4 border-b-2 border-b-secondary">
                    {data.map((channel) => {    
                        return (    
                    <div className="h-28 w-24 flex flex-col justify-center items-center p-4 hover:bg-highlight cursor-pointer rounded-xl" key={channel._id}>
                        <div className="rounded-full h-18 w-18 border-2 border-secondary">
                            <img src={channel.img}/>
                        </div>
                        <h3 className="text-primary text-lg">{channel.channelName}</h3>
                    </div>
                    );
                })}
                </div>
                <div>
                    <Homegrid showChannelName={true}/>
                </div>
            </div>
        </>
    )
}

export default SubscriptionGrid ;