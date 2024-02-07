import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'happy');

  // if (isFetching) return <Loader title="Loading songs..." />;

  // if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  const [moodData, setMoodData] = useState([]);

  const FilterByMoodAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      const params = {
        filter: JSON.stringify({ mood: genreListId || 'happy' })
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/song`, { params, headers });

      // Do something with the response
      console.log("moodData Data received =>", response.data.data[0]);
      setMoodData(response.data.data);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    FilterByMoodAPI();
  }, [genreListId]);

  return (
    <>

      <div className="flex flex-col">

        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <Link to="/">
          <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
          </Link>
          <select
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreListId || 'happy'}
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
          </select>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {moodData?.map((song, i) => (
            <SongCard
              key={song._id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={moodData}
              i={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
