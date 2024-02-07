import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbumById } from '../utils/apiUtils';
import { ArtistCard, Error, Loader } from '../components';

const AlbumDetails = () => {
  const { id: albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumData = await fetchAlbumById(albumId);
        setAlbum(albumData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [albumId]);

  if (loading) return <Loader title="Loading album details..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col item-center">
      <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
        <div className="absolute inset-0 flex items-center">
          <img
            alt="profile"
            src={album?.image}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">
              {album?.name}
            </p>

            <p className="text-base text-gray-400 mt-2">
              {album?.description}
            </p>
          </div>
        </div>

        <div className="w-full sm:h-44 h-24" />
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {album?.artists?.map((artist) => (
          <ArtistCard key={artist._id} track={artist} />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
