import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { genres } from '../assets/constants';
import { fetchSongsByMood } from '../utils/apiUtils';
// import { useGetSongsByMoodQuery } from '../redux/services/netwonCoreApi';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const { data, isFetching, errors } = useGetSongsByMoodQuery(genreListId || 'happy');

  // console.log("Data => :",data, isFetching, errors);

  // if (isFetching) return <Loader title="Loading songs..." />;

  // if (errors) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  const [moodData, setMoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleSongs, setVisibleSongs] = useState(10); // Number of initially visible songs

  const fetchSongs = async () => {
    try {
      const data = await fetchSongsByMood(genreListId);
      setMoodData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
    // setMoodData(data.data);
  }, [genreListId]);

  const fetchMoreSongs = async () => {
    setLoading(true);
    try {
      const additionalData = await fetchSongsByMood(genreListId);
      setMoodData((prevData) => [...prevData, ...additionalData]);
      setVisibleSongs((prevVisibleSongs) => prevVisibleSongs + additionalData.length);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <Link to="/">
            <h2 className="font-bold text-3xl text-white text-left">Home {genreTitle}</h2>
          </Link>
          <select
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreListId || 'happy'}
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {loading && <Loader title="Loading songs..." />}
          {error && <Error />}
          {!loading &&
            !error &&
            moodData?.slice(0, visibleSongs).map((song, i) => (
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

      {!loading && !error && visibleSongs < moodData.length && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={fetchMoreSongs}
        >
          See More
        </button>
      )}
    </>
  );
};

export default Discover;
