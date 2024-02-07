import React, { useEffect, useState } from 'react';
import { ArtistCard, Error, Loader } from '../components';
import { fetchTopArtists } from '../utils/apiUtils';

const TopArtists = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTopArtists = async () => {
    try {
      setIsLoading(true);
      const topArtists = await fetchTopArtists();
      setData(topArtists);
    } catch (error) {
      console.error('Error fetching top artists:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopArtists();
  }, []);

  if (isLoading) {
    return <Loader title="Loading top artists..." />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => <ArtistCard key={track._id} track={track} />)}
      </div>
    </div>
  );
};

export default TopArtists;
