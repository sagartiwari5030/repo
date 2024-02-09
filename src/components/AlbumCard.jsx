import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumCard = ({ album }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[170px] h-[200px] p-2 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/album/${album?._id}`)}
    >
      <img alt="album_img" src={album?.image} className="w-full h-28 rounded-lg" />
      <p className="mt-2 font-semibold text-sm text-white truncate">
        {album?.title}<br></br>
        {album?.description}
      </p>
    </div>
  );
};

export default AlbumCard;
