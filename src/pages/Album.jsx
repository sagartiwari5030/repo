import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AlbumCard, Error, Loader } from '../components';

const Album = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [albums, setAlbums] = useState([]);

  const GetAlbumAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      const response = await axios.get(`${url}/api/v1/music/album`, { headers });

      console.log("Data received =>", response.data.data[0]);
      setAlbums(response.data.data);
      setLoading(false); // Set loading to false after successful fetch
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error); // Set the error state in case of an error
      setLoading(false); // Set loading to false
    }
  };
  
  useEffect(() => {
    GetAlbumAPI();
  }, []);

  if (loading) {
    return <Loader title="Loading albums..." />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top Album</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {albums?.map((album) => <AlbumCard key={album._id} album={album} />)}
      </div>
    </div>
  );
};

export default Album;
