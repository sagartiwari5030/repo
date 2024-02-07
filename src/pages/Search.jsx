import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import { fetchSearchResults } from '../utils/apiUtils';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const [data, setData] = useState([]);

  useEffect(() => {
    SearchAPI();
  }, [searchTerm]);

  const SearchAPI = async () => {
    try {
      const searchResults = await fetchSearchResults(searchTerm);
      setData(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Showing results for <span className="font-black">{searchTerm}</span>
        </h2>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data.map((song, i) => (
            <SongCard
              key={song._id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
