import axios from 'axios';

const API_URL = "https://academics.newtonschool.co";

const headers = {
  "Content-Type": "application/json",
  "projectId": "f104bi07c490"
};

//Fetch album  API..........

export const fetchAlbums = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/music/album`, { headers });
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
  export const fetchSongsByMood = async (genreId) => {
    try {
      const params = {
        filter: JSON.stringify({ mood: genreId || 'happy' })
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
  
export const fetchTopArtists = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/music/artist/`, { headers });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching top artists:', error);
      throw error;
    }
  };

