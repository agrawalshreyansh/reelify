import { useNavigate } from "react-router-dom"


const SignUp = () => {

    const navigate = useNavigate()

    const showLoginForm = () => {
        navigate('/login')
    }

    return (
        <div >
            <div className="flex items-center justify-center flex-col py-4">
                <div className="flex flex-col w-[48vw] my-6 mx-20 px-36 py-12 bg-white/10 shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[4.5px] rounded-[10px] border border-white/18 ">
                    <div className="flex flex-col h-20 justify-center ">
                        <label htmlFor="fullname" className="text-white">Full Name</label>
                        <input
                            placeholder="Name"
                            type="text"
                            name="fullname"
                            className="border-2 border-primary text-white p-2 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col h-20 justify-center">
                        <label htmlFor="fullname" className="text-white">Email</label>
                        <input
                            placeholder="Name"
                            type="text"
                            name="fullname"
                            className="border-2 border-primary text-white p-2 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col h-20 justify-center">
                        <label htmlFor="fullname" className="text-white">Username</label>
                        <input
                            placeholder="Name"
                            type="text"
                            name="fullname"
                            className="border-2 border-primary text-white p-2 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col justify-center my-4">
                        <label htmlFor="fullname" className="text-white">Avatar</label>
                        <input
                            placeholder="Name"
                            type="file"
                            name="fullname"
                            className="border-2 border-primary text-white w-24 px-2"
                        />
                    </div>
                    <div className="flex flex-col justify-center my-4">
                        <label htmlFor="fullname" className="text-white">CoverImage</label>
                        <input
                            placeholder="Name"
                            type="file"
                            name="fullname"
                            className="border-2 border-primary text-white w-24 px-2"
                        />
                    </div>
                    <div className="flex flex-col h-20 justify-center">
                        <label htmlFor="fullname" className="text-white">Password</label>
                        <input
                            placeholder="Name"
                            type="password"
                            name="fullname"
                            className="border-2 border-primary text-white p-2 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col h-20 justify-center">
                        <label htmlFor="fullname" className="text-white">Confirm Password</label>
                        <input
                            placeholder="Name"
                            type="password"
                            name="fullname"
                            className="border-2 border-primary text-white p-2 rounded-xl"
                        />
                    </div>
                    <div className="text-primary ml-auto">
                        Already have an account? <span className="cursor-pointer underline" onClick={() => showLoginForm()}>Login here</span>
                    </div>
                    <div>
                    </div>
                    <button type="submit" className="text-primary bg-highlight rounded-3xl h-10 mt-8">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp