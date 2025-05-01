import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loader from "../components/loader";
import { BASE_URL } from "../constants/constants.js";

const Login = () => {

    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    const [error,setError] = useState("")

    const showRegisterationForm = () => {
        navigate('/signup')
    }

    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(formData);

        const formDataToSend = JSON.stringify(formData)

        console.log(formDataToSend)

        axios.post(`${BASE_URL}/api/v1/users/login`, formDataToSend,  {
            withCredentials: true,
        headers: {
            "Content-Type": "application/json", 
        },
        })
            .then(response => {
                console.log(response.data.data.user);
                localStorage.setItem("fullName", response.data.data.user.fullName)
                localStorage.setItem("coverImage", response.data.data.user.coverImage)
                localStorage.setItem("avatar", response.data.data.user.avatar)
                localStorage.setItem("username", response.data.data.user.username)
                localStorage.setItem("email", response.data.data.user.email)
                localStorage.setItem("userId", response.data.data.user._id)
                setLoading(false)
                navigate('/');
            })
            .catch(error => {
                
                if (error.response) {
                    setError(error.response.data.message)
                } 
                setLoading(false)
            });
           
    };

    const [showPassword, setShowPassword] = useState(false);



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
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col h-20 justify-center">
                        <label htmlFor="password" className="text-white">Password</label>
                        <div className="relative">
                            <input
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="border-2 border-primary text-white p-2 rounded-xl w-full pr-10"
                                onChange={handleChange}
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
                    <div className="text-primary ml-auto underline" onClick={() => navigate('/changepassword')}>
                        Forgot Password?
                    </div>
                    <div className="text-red-600 text-center">{error}</div>
                    {isLoading ? <div className="flex items-center justify-center w-[100%] my-4"><Loader/></div> : 
                    <div className="text-primary bg-highlight rounded-3xl h-10 mt-8 flex items-center justify-center cursor-pointer">
                        <input type="submit" placeholder="Login" onClick={handleSubmit} className="cursor-pointer"/>
                    </div>
                    }   
                    <div className="text-primary text-center mt-16">
                        <p>Don&apos;t have an account? <span onClick={() => showRegisterationForm()} className="cursor-pointer underline">Register here</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login; 