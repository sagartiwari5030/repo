import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ _id, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <img
        alt="profile"
        src={artistData?.image}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistData?.name}
        </p>

        <p className="text-base text-gray-400 mt-2">
          {artistData?.description}
        </p>


        {/* need to design the component start*/}

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {songData?.map((song) => (
            <div>
              <Link to={`/songs/${song?._id}`}>
                <p className="text-base text-gray-400 mt-2">{song?.title}</p>
              </Link>
              <img
                alt="profile"
                src={song?.thumbnail}
                className="sm:w-12 w-12 sm:h-12 h-12 rounded-full object-cover border-2 shadow-xl shadow-black"
              />
              <p className="text-base text-gray-400 mt-2">
                {
                  song?.mood
                }
              </p>
            </div>
          ))}
        </div>

         {/* need to design the component end*/}



        {/* {!_id && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )} */}


      </div>
    </div>

    <div className="w-full sm:h-44 h-24" />
  </div>
);

export default DetailsHeader;
