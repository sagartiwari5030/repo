import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { genres } from '../assets/constants';
import ReactPaginate from 'react-paginate';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const [moodData, setMoodData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const songsPerPage = 30;

  const filteredSongs = moodData.slice(pageNumber * songsPerPage, (pageNumber + 1) * songsPerPage);

  const pageCount = Math.ceil(moodData.length / songsPerPage) || 1;

  const FilterByMoodAPI = async (page) => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      const params = {
        filter: JSON.stringify({ mood: genreListId || 'happy' }),
        limit: songsPerPage,
        offset: page * songsPerPage,
      };

      const response = await axios.get(`${url}/api/v1/music/song`, { params, headers });

      setMoodData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
    FilterByMoodAPI(newPage);
  };

  useEffect(() => {
    FilterByMoodAPI(pageNumber);
  }, [genreListId, pageNumber]);

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <Link to="/">
            <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
          </Link>
          <select
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreListId || 'happy'}
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {filteredSongs.map((song, i) => (
            <SongCard
              key={song._id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={moodData}
              i={i}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            className={`pagination-btn ${pageNumber === 0 && 'disabled'}`}
            onClick={() => handlePageChange(pageNumber - 1)}
            disabled={pageNumber === 0}
          >
            Previous
          </button>
          <span className="mx-4 text-white">{pageNumber + 1} of {pageCount}</span>
          <button
            className={`pagination-btn ${pageNumber === pageCount - 1 && 'disabled'}`}
            onClick={() => handlePageChange(pageNumber + 1)}
            disabled={pageNumber === pageCount - 1}
          >
            Next
          </button>
        </div>

        {/* ReactPaginate component */}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};

export default Discover;
