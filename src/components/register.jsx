import React, { useState } from 'react';
import Modal from './Modal';

import { toast } from 'react-toastify';
import {BASE_URL} from '../constants'; // Adjust the import based on your project structure

const Register = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file); // Store the actual file
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result); // Set preview for display
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file); // Store the actual file
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result); // Set preview for display
      };
      reader.readAsDataURL(file);
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
  
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    if (avatar) formData.append('avatar', avatar);
    if (coverImage) formData.append('coverImage', coverImage);
  
    try {
      const res = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        body: formData, 
      });
  
      const result = await res.json();
      console.log(result.statusCode);
      if (result.statusCode === 200) {
        toast.success('Registration Successful!');
        toast.success('Please login to continue');
        setOpen(false);
      } else {
        setError(result.message)
        toast.error(result.message || 'Registration failed');
      }
      setLoading(false);

    } catch (err) {
      console.error(err);
      toast.error('Network error',err);
      setError(err);
      setLoading(false);
    }
  };
  

  return (
    <div className=''>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="mx-12 overflow-y-scroll max-h-screen">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              autoComplete="off"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
            />
            <input
              type="text"
              placeholder="Username *"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email *"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
            />
            <div className="flex flex-col gap-2">
              <label>Avatar  *</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:outline-none"
              />
              {avatarPreview && (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="w-24 h-24 rounded-full object-cover mt-2"
                />
              )}
            </div>
            <div className="flex flex-col gap-2">
               <label>Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:outline-none"
              />
              {coverImagePreview && (
                <img
                  src={coverImagePreview}
                  alt="Cover Image Preview"
                  className="w-full h-32 object-cover mt-2"
                />
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password *"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password *"
                autoComplete="off"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {error && <div className='text-center text-red-500'>{error}</div>}
            <button
              type="submit"
              className="bg-[#267bcb] text-white rounded-lg p-3 mt-4 cursor-pointer"
              disabled={loading}
            >
             {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
          <div className="flex justify-center my-8">
            Already have an account?{' '}
            <button className="ml-2 underline cursor-pointer" onClick={() => setOpen(false)}>Login here</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
