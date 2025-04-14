import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./loader";

const ChangePassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    return (
        <div >
        <div className="flex items-center justify-center flex-col w-[88vw] h-[100%]">
            <div className="flex flex-col w-[36vw] px-16 py-20 my-6 mx-20 bg-white/10 shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[4.5px] rounded-[10px]  border border-white/18">
                <div className="flex flex-col h-20 justify-center">
                    <label htmlFor="fullname" className="text-white">Username</label>
                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        className="border-2 border-primary text-white p-2 rounded-xl"
                       
                        />
                </div>
                <div className="flex flex-col h-20 justify-center">
                    <label htmlFor="password" className="text-white">Old Password</label>
                    <div className="relative">
                        <input
                            placeholder="OldPassword"
                            type={showPassword ? "text" : "password"}
                            name="oldPassword"
                            className="border-2 border-primary text-white p-2 rounded-xl w-full pr-10"
                            onChange={() => {}}
                            />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                            onClick={() => setShowPassword(prev => !prev)}
                            >
                            {showPassword ? "👁️" : "🙈"}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col h-20 justify-center">
                    <label htmlFor="password" className="text-white">New Password</label>
                    <div className="relative">
                        <input
                            placeholder="NewPassword"
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            className="border-2 border-primary text-white p-2 rounded-xl w-full pr-10"
                            onChange={() => {}}
                            />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                            onClick={() => setShowPassword(prev => !prev)}
                            >
                            {showPassword ? "👁️" : "🙈"}
                        </button>
                    </div>
                </div>
                
                {isLoading ? <div className="flex items-center justify-center w-[100%] my-4"><Loader/></div> : 
                <div className="text-primary bg-highlight rounded-3xl h-10 mt-8 flex items-center justify-center cursor-pointer">
                    <input type="submit" placeholder="Login" onClick={() => {}} className="cursor-pointer"/>
                </div>
                }   
                <div className="text-primary text-center mt-16">
                    <p>Don&apos;t have an account? <span onClick={() =>{navigate('/signup')}} className="cursor-pointer underline">Register here</span></p>
                </div>
            </div>
        </div>
    </div>
)

}

export default ChangePassword;