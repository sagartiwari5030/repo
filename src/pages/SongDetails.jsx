import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  // console.log("songid =>", songid);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });
  // const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  // if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;

  // console.log(songData);

  const [songs, setSongs] = useState([]);

  const GetSongDetailByIDAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/song/${songid}`, { headers });

      // Do something with the response
      console.log("artist Data received =>", response.data.data);
      setSongs(response.data.data);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    GetSongDetailByIDAPI()
  }, []);

  // if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const [clicked, setClicked] = useState(false);

  const handleLikeClick = () => {
    setClicked((prevClicked) => !prevClicked);
    // setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col">

      <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

        <div className="absolute inset-0 flex items-center">
          <img
            alt="profile"
            src={songs?.thumbnail}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">
              {songs?.title}
            </p>

            <div className="flex">
              <p className="text-base text-gray-400 mt-2 mr-4">
                {songs?.mood}
              </p>
              <p className="text-base text-gray-400 mt-2">
                <FaHeart
                  className={`mr-1 inline cursor-pointer ${clicked ? 'text-red-500 text-2xl' : ''}`}
                  onClick={handleLikeClick}
                />
                <span>{""}</span>
              </p>
            </div>

            {/* <Link to={`/artists/${songs?.artist[0]?._id}`}>
              <p className="text-base text-gray-400 mt-2">{songs?.artist[0]?.name}</p>
            </Link> */}

          </div>
        </div>

        <div className="w-full sm:h-44 h-24" />
      </div>

      {/* <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}

    </div>
  );
};

export default SongDetails;
