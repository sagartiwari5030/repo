import React, { useState } from 'react';
import { Link,useNavigate,NavLink} from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { useUser } from '../contexts/UserProvider';
import { logo } from '../assets';
import { RiCloseLine } from 'react-icons/ri';



const Searchbar = () => {
  // const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   navigate(`/search/${searchTerm}`);
  // };

   //------Mobile Search bar-----------
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };
//Mobile Navbar---------------
const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Tranding', to: '/tranding', icon: HiOutlineHashtag },
  { name: 'SignUp ', to: '/signup', icon: HiOutlineHashtag },
  { name: 'Login ', to: '/login', icon: HiOutlineHashtag },
  { name: 'Updatepass ', to: '/updatepass', icon: HiOutlineHashtag },
  { name: 'Album ', to: '/album', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const { user, signOutUser } = useUser();

  
  
  return (

    <>
    {/* mobile search bar code */}
    <div className="flex flex-row justify-between items-center ">
    <form onSubmit={handleSubmit} autoComplete="off" className=" p-2 mb-0 text-gray-400 focus-within:text-white">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row items-center ">
        {/* <FiSearch aria-hidden="true" className="w-5 h-5 ml-0 mt-4 mr-4" /> */}
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="mt-4  mr-8 w-30 md:w-80 bg-transparent border-2 rounded-full placeholder-gray-500 outline-none text-base text-white p-2 md:p-3 focus:placeholder-transparent"
          placeholder="Search by Song Name"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
      {/* Button componenent */}
      <div className="hidden md:flex items-center justify-end p-4">
      <Link to="/premium">
      <button className="text-white bg-red-500 px-4 py-2 rounded mr-2">
      Explore Premium
      </button>
      </Link>
      <Link to={user ? "#" : "/login"}>
  <button
    className={`text-white ${user ? 'bg-red-500' : 'bg-green-500'} px-4 py-2 rounded`}
    onClick={user ? signOutUser : undefined}
  >
    {user ? 'Logout' : 'Login'}
  </button>
</Link>
      
    </div>
       
{/* Button componenent END */}
</div>

{/* mobile nav link */}
    {/* Mobile sidebar */}
    <div className="absolute md:hidden block top-6 right-2  ">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-7 h-8 ml-12 mt-1  text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-8 mr-2 ml-12 mt-2  text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
     
    {/* <form  style={fromstyle}  onSubmit={handleSubmit} autoComplete="on" className="p-2 text-gray-400 focus-within:text-white">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className=" flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 mt-4 mr-2" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="mt-4 w-30 md:w-80 bg-transparent border-2 rounded-full placeholder-gray-500 outline-none text-base text-white p-2 md:p-3 focus:placeholder-transparent"
          placeholder="Search by songs"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
     
    </form> */}
    

    </>
  );
};

export default Searchbar;
