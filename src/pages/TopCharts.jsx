import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import axios from 'axios';

const TopCharts = () => {
  // const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // if (isFetching) return <Loader title="Loading Top Charts" />;

  // if (error) return <Error />;

  const [featureds, setFeatureds] = useState([]);

  const GetFeaturedAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
  
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };
  
      const params = {
        filter: JSON.stringify({ featured: 'Trending songs' })
      };
  
      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/song`, { params, headers });
  
      // Do something with the response
      console.log("featureds Data received =>",response.data.data);
      setFeatureds(response.data.data);
  
      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching artist:', error);
      // setLoading(false);
    }
  };
  
  useEffect(() => {
    GetFeaturedAPI();
  },[]);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Features</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {featureds.map((song, i) => (
          <SongCard
            key={song._id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={featureds}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
