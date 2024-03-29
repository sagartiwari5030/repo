import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiHeart, HiStar, HiOutlineHome } from 'react-icons/hi';


import { logo } from '../assets';

const links = [
  { name: 'Home', to: '/', icon: HiOutlineHome },
  { name: 'Your Library', to: '/liked-songs', icon: HiHeart },
  { name: 'Premium', to: '/premium', icon: HiStar },
];


const NavLinks = ({ isLoggedIn }) => {
  const filteredLinks = isLoggedIn ? links.filter(link => link.name === 'Home' || link.name === 'Your Library') : links.filter(link => link.name === 'Home' || link.name === 'Premium');
  return (
    <div className="mt-10">
      {filteredLinks.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = ({ isLoggedIn }) => {
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]  ">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
};

export default Sidebar;
