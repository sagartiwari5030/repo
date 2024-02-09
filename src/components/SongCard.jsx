import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa'; 
import { useState } from 'react';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import axios from 'axios';
import { useUser } from '../contexts/UserProvider';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();
  const { getUser } = useUser();
  const [clicked, setClicked] = useState(false);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handleLikeClick = async (songId) => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490",
        "Authorization":`Bearer ${getUser.token}`
      };

      // Make a POST request to your API endpoint
      const response = await axios.patch(`${url}/api/v1/music/favorites/like`, { "songId" : songId}, { headers });

      // Do something with the response
      console.log("Like Data received =>", response.data.data);

      setClicked((prevClicked) => !prevClicked);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col w-[170px] h-[200px] p-2 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-28 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.thumbnail} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-2 flex flex-col">
        <p className="font-semibold text-sm text-white truncate">
          <Link to={`/songs/${song?._id}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-xs truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artist[0]?._id}` : '/top-artists'}>
            {song?.artist[0]?.name}
          </Link>
        </p>
      </div>

      <div className="absolute bottom-0 right-0 p-2 text-white">
        <FaHeart className={`mr-1 inline cursor-pointer ${clicked ? 'text-red-500 text-xl' : ''}`} onClick={() => handleLikeClick(song?._id)} />
        <span>{""}</span>
      </div>
    </div>
  );
};

export default SongCard;
