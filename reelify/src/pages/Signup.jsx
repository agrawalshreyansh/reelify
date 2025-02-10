const SignUp = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-col w-[88vw]">
                <div className="flex flex-col h-20 border-2 justify-center w-[20vw]">
                    <label htmlFor="fullname" className="text-white">Full Name</label>
                    <input
                        placeholder="Name"
                        type="text"
                        name="fullname"
                        className="border-2 border-primary text-white p-2 rounded-xl"
                    />
                </div>
                <div className="flex flex-col h-20 border-2 justify-center w-[20vw]">
                    <label htmlFor="fullname" className="text-white">Email Id</label>
                    <input
                        placeholder="Name"
                        type="text"
                        name="fullname"
                        className="border-2 border-primary text-white p-2 rounded-xl"
                    />
                </div>
                <div className="flex flex-col h-20 border-2 justify-center w-[20vw]">
                    <label htmlFor="fullname" className="text-white">Username</label>
                    <input
                        placeholder="Name"
                        type="text"
                        name="fullname"
                        className="border-2 border-primary text-white p-2 rounded-xl"
                    />
                </div>
                <div className="flex flex-col border-2 justify-center">
                    <label htmlFor="fullname" className="text-white">Avatar</label>
                    <input
                        placeholder="Name"
                        type="file"
                        name="fullname"
                        className="border-2 border-primary text-white p-2 rounded-xl"
                    />
                </div>
                <div className="flex flex-col justify-center ">
                    <label htmlFor="fullname" className="text-white">CoverImage</label>
                    <input
                        placeholder="Name"
                        type="file"
                        name="fullname"
                        className="bg-highlight text-white w-20"
                    />
                </div>
                <div className="flex flex-col h-20 border-2 justify-center w-[20vw]">
                    <label htmlFor="fullname" className="text-white">Password</label>
                    <input
                        placeholder="Name"
                        type="password"
                        name="fullname"
                        className="border-2 border-primary text-white p-2 rounded-xl"
                    />
                </div>
            </div>
        </>
    )
}

export default SignUp