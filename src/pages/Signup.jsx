import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loader from "../components/loader";

const SignUp = () => {
  const navigate = useNavigate();

  const showLoginForm = () => {
    navigate("/login");
  };

  const [isLoading, setLoading] = useState(false);

  const [error,setError] = useState("")

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    avatar: null,
    coverImage: null,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [file, setFiles] = useState({});
  const handleFileChange = (e, key) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setFiles((prev) => ({
      ...prev,
      [key]: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("avatar", formData.avatar);
    formDataToSend.append("coverImage", formData.coverImage);
    formDataToSend.append("password", formData.password);

    setLoading(true)    

    axios
      .post(
        "https://reelify-backend.onrender.com/api/v1/users/register",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true, 
        }
      )
      .then(() => {
        setLoading(false)
        navigate("/login");
        alert("Account creation successfull ! Please login to continue !")
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server Error:", error.response.data);
          setError(error.response.data.message)
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Request Setup Error:", error.message);
        }
        setLoading(false)
      });
      
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center flex-col py-4">
        <form className="flex flex-col w-[48vw] my-6 mx-20 px-36 py-12 bg-white/10 shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[4.5px] rounded-[10px] border border-white/18 ">
          <div className="flex flex-col h-20 justify-center ">
            <label htmlFor="fullname" className="text-white">
              Full Name
            </label>
            <input
              placeholder="Name"
              type="text"
              className="border-2 border-primary text-white p-2 rounded-xl"
              name="fullname"
              value={formData.fullname}
              onChange={(e) => {
                handleChange(e, "file1");
              }}
            />
          </div>
          <div className="flex flex-col h-20 justify-center">
            <label htmlFor="fullname" className="text-white">
              Email
            </label>
            <input
              placeholder="Name"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-primary text-white p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col h-20 justify-center">
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              placeholder="Name"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              className="border-2 border-primary text-white p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center my-4">
            <label htmlFor="fullname" className="text-white">
              Avatar
            </label>
            <input
              placeholder="Name"
              type="file"
              name="avatar"
              onChange={(e) => {
                handleFileChange(e, "file1");
              }}
              accept=".png, .jpg, .jpeg .heic .gif"
              className="border-2 border-primary text-white w-24 px-2"
            />
            {file.file1 && <img src={file.file1} className="w-48 mt-2" />}
          </div>
          <div className="flex flex-col justify-center my-4">
            <label htmlFor="fullname" className="text-white">
              CoverImage
            </label>
            <input
              placeholder="Name"
              type="file"
              name="coverImage"
              onChange={(e) => handleFileChange(e, "file2")}
              accept=".png, .jpg, .jpeg, .heic, .gif"
              className="border-2 border-primary text-white w-24 px-2"
            />
            {file.file2 && <img src={file.file2} className="w-48 mt-2" />}
          </div>
          <div className="flex flex-col h-20 justify-center relative">
            <label htmlFor="fullname" className="text-white">
              Password
            </label>
            <input
              placeholder="Name"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 border-primary text-white p-2 rounded-xl"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform text-white cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
          <div className="text-primary ml-auto">
            Already have an account?{" "}
            <span
              className="cursor-pointer underline"
              onClick={() => showLoginForm()}
            >
              Login here
            </span>
          </div>
          <div className="text-center text-red-500">
              {error}
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center mt-8">
              <Loader />
            </div>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-primary bg-highlight rounded-3xl h-10 mt-8 cursor-pointer"
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
