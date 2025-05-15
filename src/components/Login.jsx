import React, { useState, useContext, useEffect } from 'react';
import Modal from './modal';
import Register from './register';
import PasswordReset from './Resetpass';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';
import usePostData from '../hooks/usePostData';

const Login = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const { data, error: err, isLoading, postData } = usePostData('users/login',true);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    await postData({ username, password });
  };

  useEffect(() => {
    if (data) {
      toast.success('Login Successful!');
     
      setUser(data.user);
      setIsLoggedIn(true);
      setOpen(false);
    } else if (err) {
      setError(err);
    }
  }, [data, err]);

  return (
    <div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="mx-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {/* <div className="flex justify-end text-sm text-[#267bcb] ">
              <button className="underline cursor-pointer" type='button' onClick={() => setPasswordOpen(true)}>Forgot Password?</button>
            </div> */}
            {error && <div className='text-center text-red-500'>{error}</div>}
            <button
              type="submit"
              className="bg-[#267bcb] text-white rounded-lg p-3 mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="flex justify-center my-8">
            Don't have an account?{' '}
            <button className="ml-2 underline cursor-pointer" onClick={() => setRegisterOpen(true)}>Register here</button>
            <Register open={registerOpen} setOpen={setRegisterOpen} />
            <PasswordReset open={passwordOpen} setOpen={setPasswordOpen} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
