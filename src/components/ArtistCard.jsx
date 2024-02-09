import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[175px] h-[200px] p-2 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?._id}`)}
    >
      <img alt="artist_img" src={track?.image} className="w-full h-28 rounded-lg" />
      <p className="mt-2 font-semibold text-sm text-white truncate">
        {track?.name}<br></br>
        {track?.description}
      </p>
    </div>
  );
};

export default ArtistCard;
