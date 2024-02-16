import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  Discover,
  Search,
  TopArtists,
  ArtistDetails,
  SongDetails,
  Tranding,
  SignUp,
  Login,
  Updatepass,
  Album,
  AlbumDetails,
  Premium,
  LikedSongs
} from './pages';

import { useUser } from './contexts/UserProvider';
import { useState, useEffect } from 'react';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  const { getUser } = useUser();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getUser && getUser.status === "success") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [getUser]);

  const ProtectedRoute = ({ children, isLoggedIn, redirectTo }) => isLoggedIn ? children : <Navigate to={redirectTo} />;

  return (
    <>
      <div className="relative flex gap-2 bg-gray">
        <Sidebar isLoggedIn={isLoggedIn} />
        <div className="flex-1 flex flex-col bg-black">
          <Searchbar isLoggedIn={isLoggedIn} />
          <div className="px-6 h-[calc(100vh)] overflow-y-scroll  flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
                {/* <Route path="/top-artists" element={<TopArtists />} /> */}
                <Route path="/tranding" element={<Tranding />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
                {/* <Route path="/album" element={<Album />} /> */}
                <Route path="/album/:id" element={<AlbumDetails />} />

                {/* For routes that require the user to be logged in */}
                <Route path="/updatepass" element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectTo="/login"><Updatepass /></ProtectedRoute>} />
                <Route path="/liked-songs" element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectTo="/login"><LikedSongs /></ProtectedRoute>} />

                {/* For routes that require the user to be logged out */}
                <Route path="/premium" element={<ProtectedRoute isLoggedIn={!isLoggedIn} redirectTo="/"><Premium /></ProtectedRoute>} />
                <Route path="/login" element={<ProtectedRoute isLoggedIn={!isLoggedIn} redirectTo="/"><Login /></ProtectedRoute>} />
                <Route path="/signup" element={<ProtectedRoute isLoggedIn={!isLoggedIn} redirectTo="/"><SignUp /></ProtectedRoute>} />
              </Routes>
              <Album />
              <TopArtists />
            </div>
            {/* <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div> */}
          </div>
        </div>

        {activeSong?.title && (
          <div className="fixed h-24 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
