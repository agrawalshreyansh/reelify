import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';

const NavPages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);

  const pages = [
    { name: 'Home', path: '' },
    { name: 'Subscriptions', path: 'subscriptions' },
    { name: 'History', path: 'history' },
    { name: 'My Channel', path: user?.username ? `channel/${user?.username}` : 'channel/login' },
  ];

  return (
    <div className='flex flex-col md:flex-row text-s cursor-pointer w-full md:w-auto'>
      {pages.map((page) => {
        const isActive = location.pathname === `/${page.path}`;
        return (
          <div
            key={page.name}
            className={`py-3 px-6 rounded-xl transition-colors ${isActive ? 'bg-secondary text-highlight' : 'hover:bg-secondary hover:text-highlight md:mx-2'}`}
            onClick={() => navigate(`/${page.path}`)}
          >
            {page.name}
          </div>
        );
      })}
    </div>
  );
};

export default NavPages;
