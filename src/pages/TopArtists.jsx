import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  // const { data, isFetching, error } = useGetTopChartsQuery();
  // if (isFetching) return <Loader title="Loading artists..." />;
  // if (error) return <Error />;
  const [data, setData] = useState([]);

  const GetArtistAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/artist/`, { headers });

      // Do something with the response
      console.log("Data received =>",response.data.data[0]);
      setData(response.data.data);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };
  
  useEffect(() => {
    // Update the document title using the browser API
   GetArtistAPI()
  },[]);


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