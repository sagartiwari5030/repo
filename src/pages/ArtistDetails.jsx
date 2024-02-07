import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs, SongCard } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  // if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  // if (error) return <Error />;

  const [artist, setArtist] = useState([]);
  const [songs, setSongs] = useState([]);

  const GetArtistDetailByIDAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/artist/${artistId}`, { headers });

      // Do something with the response
      // console.log("artist Data received =>", response.data.data.songs);
      setArtist(response.data.data);
      setSongs(response.data.data.songs);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    GetArtistDetailByIDAPI()
  }, [artistId]);


  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artist}
      // songData={songs}
      />


      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            key={song._id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songs}
            i={i}
          />
        ))}
      </div>

      {/* <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      /> */}
    </div>
  );
};

export default ArtistDetails;
