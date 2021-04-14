import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original"; //helps to load in all images

function Row({ title, fetchUrl, isLargeRow }) {
    //react hooks functional pieces of code
    const [movies, setMovies] = useState([]);
    //a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl); //wait for data to come in and then proceed 
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    }, [fetchUrl]); //if [], run once when the row loads, and run again

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
            {/* row poster */}

            {movies.map((movie) => (
                <img 
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
            </div>
        </div>
    )
}
//rfce shortcut
export default Row;