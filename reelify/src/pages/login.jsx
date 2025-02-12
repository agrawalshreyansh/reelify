import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate()

    const showRegisterationForm = () => {
        navigate('/signup')
    }


    return (
        <div >
            <div className="flex items-center justify-center flex-col w-[88vw] h-[100%]">
                <div className="flex flex-col w-[36vw] px-16 py-20 my-6 mx-20 bg-white/10 shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[4.5px] rounded-[10px]  border border-white/18">
                    <div className="flex flex-col h-20 justify-center">
                        <label htmlFor="fullname" className="text-white">Username / Email</label>
                        <input
                            placeholder="Email / username"
                            type="text"
                            name="fullname"
                            className="border-2 border-primary text-white p-2 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col h-20 justify-center">
                        <label htmlFor="fullname" className="text-white">Password</label>
                        <input
                            placeholder="Password"
                            type="password"
                            name="fullname"
                            className="border-2 border-primary text-white p-2 rounded-xl"
                        />
                    </div>
                    <div className="text-primary ml-auto">
                        Forgot Password?
                    </div>
                    <div className="text-primary bg-highlight rounded-3xl h-10 mt-8 flex items-center justify-center">
                        <input type="submit"  placeholder="Login"/>
                    </div>
                    <div className="text-primary text-center mt-16">
                        <p>Don&apos;t have an account? <span onClick={() => showRegisterationForm()} className="cursor-pointer underline">Register here</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login ; 