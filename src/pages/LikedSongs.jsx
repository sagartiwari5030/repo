import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArtistCard, Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import AlbumCard from '../components/AlbumCard';
import { useSelector } from 'react-redux';

const LikedSongs = () => {
  // const { data, isFetching, error } = useGetTopChartsQuery();
  // if (isFetching) return <Loader title="Loading artists..." />;
  // if (error) return <Error />;
  const [liked, setLiked] = useState([]);

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const GetLikedSongsAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjdhYzg4MjBkOTk4MTI2ZmI3NDM2YiIsImlhdCI6MTcwNjUzNjA3MywiZXhwIjoxNzM4MDcyMDczfQ.gFhj4OTj4yDn8kjcXekHLZ5JZpvSMMjZyE3k8APfDUQ"
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/favorites/like`, { headers });

      // Do something with the response
      console.log("Like Data received =>", response.data.data);
      setLiked(response.data.data.songs);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    GetLikedSongsAPI()
  }, []);


  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Liked Songs</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {liked?.map((song, i) => (
          <SongCard
            key={song._id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={liked}
            i={i}
          />
        ))}
      </div>

    </div>
  );
};

export default LikedSongs;