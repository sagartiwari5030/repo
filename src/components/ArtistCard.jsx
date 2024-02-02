import React from 'react';

import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?._id}`)}
    >
      <img alt="song_img" src={track?.image} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
       {track?.name}<br></br>
        {track?.description}
      </p>
      
    </div>
  );
};

export default ArtistCard;