import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-transparent z-50"
    >
      <div className="bg-bg rounded-2xl p-6 w-11/12 max-w-xl shadow-lg border-2 border-secondary">
        <button onClick={onClose} className="ml-auto block mb-4 text-gray-500 text-4xl rotate-45 cursor-pointer">+</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;


