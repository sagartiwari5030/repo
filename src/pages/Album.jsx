import React, { useEffect, useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import { Error, Loader } from '../components';
import { fetchAlbums } from '../utils/apiUtils';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory


const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleAlbums, setVisibleAlbums] = useState(8); // Number of initially visible albums
   const navigate =useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumsData = await fetchAlbums();
        setAlbums(albumsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchMoreAlbums = async () => {
    setLoading(true);
    try {
      // Assuming fetchAlbums supports pagination with offset and limit
      const additionalAlbums = await fetchAlbums(visibleAlbums, 8);
      setAlbums((prevAlbums) => [...prevAlbums, ...additionalAlbums]);
      setVisibleAlbums(40);
      // setVisibleAlbums((prevVisibleAlbums) => prevVisibleAlbums + additionalAlbums.length);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader title="Loading albums..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top Albums</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {albums.slice(0, visibleAlbums).map((album) => (
          <AlbumCard key={album._id} album={album} />
        ))}
      </div>
      <Link to="/album">
      {!loading && !error && visibleAlbums < albums.length && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 size-16"
          onClick={fetchMoreAlbums}
          
        >
          See More
        </button>
      )}

      {/* See More Button */}
      {/* {!isLoading && !error && visibleArtists < data.length && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={fetchMoreArtists}
        >
          See More
        </button>
      )}
      */}
       </Link>
    </div>
    
  );
};

export default Album;
