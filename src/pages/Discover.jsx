import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { genres } from '../assets/constants';
import { fetchSongsByMood } from '../utils/apiUtils';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  const [moodData, setMoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {loading && <Loader title="Loading songs..." />}
          {error && <Error />}
          {!loading &&
            !error &&
            moodData?.map((song, i) => (
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
