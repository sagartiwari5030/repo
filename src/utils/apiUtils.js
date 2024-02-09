import axios from 'axios';

const API_URL = "https://academics.newtonschool.co";

const headers = {
  "Content-Type": "application/json",
  "projectId": "f104bi07c490"
};

//Fetch album  API..........

export const fetchAlbums = async (params,limit = 40) => {
  try {
    const params = {
      limit: limit,
    };
    const response = await axios.get(`${API_URL}/api/v1/music/album`, {params, headers });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/music/song`, { headers });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

// Add more API functions as needed
// AlbumDetails API...................

export const fetchAlbumById = async (albumId) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/music/album/${albumId}`, { headers });
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching album with ID ${albumId}:`, error);
      throw error;
    }
  };


  // Fetch data for Descover page by MOOD 
  export const fetchSongsByMood = async (genreId,limit = 40) => {
    try {
      const params = {
        filter: JSON.stringify({ mood: genreId || 'happy' }),
        limit:limit
      };
  
      const response = await axios.get(`${API_URL}/api/v1/music/song`, { params, headers });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching songs by mood:', error);
      throw error;
    }
  };


  // Like Song API Calling................

  export const fetchLikedSongs = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/music/favorites/like`, {
        headers: {
          ...headers,
          "Authorization": `Bearer ${token}`
        }
      });
      return response.data.data.songs;
    } catch (error) {
      console.error('Error fetching liked songs:', error);
      throw error;
    }
  };

  // Search BY Song API Calling 

  export const fetchSearchResults = async (searchTerm) => {
    try {
      const params = {
        search: JSON.stringify({ title: searchTerm })
      };
  
      const response = await axios.get(`${API_URL}/api/v1/music/song`, { params, headers });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  };

  // Song Details API Fatching

  export const fetchSongDetails = async (songId) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/music/song/${songId}`, { headers });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching song details:', error);
      throw error;
    }
  };

  // fetching Tot Artist by API
  
export const fetchTopArtists = async (limit=40) => {
    try {
      const params={
        limit:limit,
      }
      const response = await axios.get(`${API_URL}/api/v1/music/artist/`, {params, headers });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching top artists:', error);
      throw error;
    }
  };


// ArtistDetails API BY ID..........................................


// const [artist, setArtist] = useState([]);
//   const [songs, setSongs] = useState([]);

//   export const getArtistDetailsById = async (artistId) => {
//     try {
//       const url = "https://academics.newtonschool.co";
//       const headers = {
//         "Content-Type": "application/json",
//         "projectId": "f104bi07c490"
//       };

//       // Make a POST request to your API endpoint
//       const response = await axios.get(`${url}/api/v1/music/artist/${artistId}`, { headers });

//       // Do something with the response
//       // console.log("artist Data received =>", response.data.data.songs);
//       setArtist(response.data.data);
//       setSongs(response.data.data.songs);


//       // Set loading to false, indicating that the data has been fetched
//       // setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // setLoading(false);
//     }
    
// //    useEffect(() => {
// //     // Update the document title using the browser API
// //     getArtistDetailsById()
// //     }, [artistId]);
//   };

export const getArtistDetailsById = async (artistId) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/music/artist/${artistId}`, { headers });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching artist details:', error);
      throw error;
    }
  };