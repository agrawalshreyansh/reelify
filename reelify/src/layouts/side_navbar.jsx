function Sidebar() {
    return (
        <>
            <div className="flex flex-col text-primary w-[12vw] items-center h-[92vh] py-5">
                <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                    <div className="h-8 w-32 my-2">Home</div>
                    <div className="h-8 w-32 my-2">Subscriptions</div>
                </div>
                <div className="w-[100%] h-28 border-b-[1px] flex flex-col items-center justify-center border-highlight">
                    <div className="h-8 w-32 my-2">History</div>
                    <div className="h-8 w-32 my-2">Saved</div>
                </div>
                <div className="w-[100%] h-28 flex flex-col items-center justify-center border-highlight">
                    <div className="h-8 w-32 my-2">My Videos</div> 
                    <div className="h-8 w-32 my-2">Settings</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;