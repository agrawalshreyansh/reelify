import React, { useState } from 'react';
import Modal from './modal';
import Register from './register';

const PasswordReset = ({ open, setOpen }) => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registerOpen,setRegisterOpen] = useState(false);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === 'old') {
      setShowOldPassword(prevState => !prevState);
    } else if (field === 'new') {
      setShowNewPassword(prevState => !prevState);
    } else if (field === 'confirm') {
      setShowConfirmNewPassword(prevState => !prevState);
    }
  };

  return (
    <div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="mx-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
          <form className="flex flex-col gap-4 mb-16">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
            />
            <div className="relative">
              <input
                type={showOldPassword ? 'text' : 'password'}
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                autoComplete="off"
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('old')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                {showOldPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="off"
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('new')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                {showNewPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmNewPassword ? 'text' : 'password'}
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                autoComplete="off"
                className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirm')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                {showConfirmNewPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {!passwordMatch && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}
            <button
              type="submit"
              className="bg-[#267bcb] text-white rounded-lg p-3 mt-4"
            >
              Reset Password
            </button>
          </form>
          <div className="flex justify-center my-8">
            Don't have an account?{' '}
            <button className="ml-2 underline cursor-pointer" onClick={() => setRegisterOpen(true)}>Register here</button>
            <Register open={registerOpen} setOpen={setRegisterOpen}/>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PasswordReset;
