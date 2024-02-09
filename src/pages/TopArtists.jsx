// import React, { useEffect, useState } from 'react';
// import { ArtistCard, Error, Loader } from '../components';
// import { fetchTopArtists } from '../utils/apiUtils';

// const TopArtists = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getTopArtists = async () => {
//     try {
//       setIsLoading(true);
//       const topArtists = await fetchTopArtists();
//       setData(topArtists);
//     } catch (error) {
//       console.error('Error fetching top artists:', error);
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getTopArtists();
//   }, []);

//   if (isLoading) {
//     return <Loader title="Loading top artists..." />;
//   }

//   if (error) {
//     return <Error />;
//   }

//   return (
//     <div className="flex flex-col">
//       <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

//       <div className="flex flex-wrap sm:justify-start justify-center gap-8">
//         {data?.map((track) => <ArtistCard key={track._id} track={track} />)}
//       </div>
//     </div>
//   );
// };

// export default TopArtists;

import React, { useEffect, useState } from 'react';
import { ArtistCard, Error, Loader } from '../components';
import { fetchTopArtists } from '../utils/apiUtils';
import { Link } from 'react-router-dom';

const TopArtists = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleArtists, setVisibleArtists] = useState(5); // Number of initially visible artists

  const getTopArtists = async () => {
    try {
      setIsLoading(true);
      const topArtists = await fetchTopArtists(visibleArtists);
      setData(topArtists);
    } catch (error) {
      console.error('Error fetching top artists:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreArtists = async () => {
    try {
      setIsLoading(true);
      const additionalArtists = await fetchTopArtists(visibleArtists, 4);
      setData((prevArtists) => [...prevArtists, ...additionalArtists]);
      setVisibleArtists(30);
      // setVisibleArtists((prevVisibleArtists) => prevVisibleArtists + additionalArtists.length);
    } catch (error) {
      console.error('Error fetching more top artists:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopArtists();
  }, [visibleArtists]);

  // if (isLoading) {
  //   return <Loader title="Loading top artists..." />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data?.map((track) => <ArtistCard key={track._id} track={track} />)}
      </div>
      {/* <Link to="/topartists"> */}
      {/* See More Button */}
      {!isLoading && !error && visibleArtists < data.length && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={fetchMoreArtists}
        >
          See More..
        </button>
      )}
      {/* </Link> */}
    </div>
  );
};

export default TopArtists;
