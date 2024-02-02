import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import { ArtistCard } from '../components';

const AlbumDetails = () => {
  const { id: albumId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  //   const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  // if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  // if (error) return <Error />;

  const [album, setAlbum] = useState([]);

  const GetAlbumDetailByIDAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/album/${albumId}`, { headers });

      // Do something with the response
      console.log("Album Data =>", response.data.data);
      setAlbum(response.data.data);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    GetAlbumDetailByIDAPI()
  }, []);


  return (
    <div className="flex flex-col item-center">
      <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
        <div className="absolute inset-0 flex items-center">
          <img
            alt="profile"
            src={album?.image}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">
              {album?.name}
            </p>

            <p className="text-base text-gray-400 mt-2">
              {album?.description}
            </p>
          </div>
        </div>

        <div className="w-full sm:h-44 h-24" />
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {album?.artists?.map((artist) => <ArtistCard key={artist._id} track={artist} />)}
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

export default AlbumDetails;
