import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa'; 
import { useState } from 'react';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const [clicked, setClicked] = useState(false);

  const handleLikeClick = () => {
    setClicked((prevClicked) => !prevClicked);
    // setIsLiked(!isLiked);
  };
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
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

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?._id}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artist[0]?._id}` : '/top-artists'}>
            {song?.artist[0]?.name}
          </Link>
        </p>
        
      </div>
      <div className="absolute bottom-0 right-0 p-4 text-white ">
        <FaHeart   className={`mr-1 inline cursor-pointer ${clicked ? 'text-red-500 text-2xl' : ''}`}
          onClick={handleLikeClick}/>
        <span>{""}</span>
      </div>
    </div>
    // {"`Liked by ${likedBy}`"}
  );
};

export default SongCard;
