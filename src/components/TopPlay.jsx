/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';



import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';
import { logo } from '../assets';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={song?.thumbnail} alt={song?.title} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song._id}`}>
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
        </Link>
        <Link to={`/artists/${song?.artist[0]._id}`}>
          <p className="text-base text-gray-300 mt-1">
            {song?.artist[0].name}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  //api call newton
  const [artists, setArtists] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.slice(0, 3);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const GetArtistAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/artist`, { headers });

      // Do something with the response
      console.log("Data received =>", response.data.data);
      setArtists(response.data.data);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching artist:', error);
      // setLoading(false);
    }
  };

  const GetFeaturedAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";

      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      const params = {
        filter: JSON.stringify({ featured: 'Trending songs' })
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/song`, { params, headers });

      // Do something with the response
      console.log("Data received =>", response.data.data);
      setData(response.data.data);

      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching artist:', error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    GetFeaturedAPI();
    GetArtistAPI();
  }, []);

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
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
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


  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
     {/* mobile search bar code */}
     <form onSubmit={handleSubmit} autoComplete="on" className=" p-2 text-gray-400 focus-within:text-white">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 mt-4 mr-2" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="mt-4  w-30 md:w-80 bg-transparent border-2 rounded-full placeholder-gray-500 outline-none text-base text-white p-2 md:p-3 focus:placeholder-transparent"
          placeholder="Search by value"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
     
    </form>
{/* mobile nav link */}
    {/* Mobile sidebar */}
    <div className="absolute md:hidden block top-6 right-2  ">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-7 h-8 ml-12  text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-8 mr-2 ml-12 mt-2  text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>







     <div className="hidden md:flex items-center justify-end p-4">
      <Link to="/premium">
      <button className="text-white bg-red-500 px-4 py-2 rounded mr-2">
      Explore Premium
      </button>
      </Link>
      <Link to="/login">
      <button className="text-white bg-green-500 px-4 py-2 rounded">
        Login
      </button>
      </Link>
    </div>
     
     
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Features Songs</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song._id}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {artists?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist._id} artist={artist}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?._id}`}>
                <img src={artist?.image} alt="Name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
