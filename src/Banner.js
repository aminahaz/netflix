import React, { useState, useEffect } from "react";
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1) //gives you one of the items randomely
            ]
          );
          return request;
         }
        fetchData();
      }, []);

      return (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backdropPosition: "center center",
          }}
        >
          {/* Background image */}
          <div className="banner_contents">
            {/* title */}
            <h1 className="banner_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
    
            {/* 2 buttons */}
            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List </button>
            </div>
    
            {/* description */}
            <h1 className="banner_description">{movie?.overview, 200}</h1>
          </div>
          <div className="banner_fadeBottom" />
        </header>
      );
}

export default Banner
