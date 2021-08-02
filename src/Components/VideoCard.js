import React, {useState, useEffect} from 'react'
import '../Style/VideoCard.css'
import axios from '../axios';

function VideoCard ({title, fetchUrl, isLargeRow=false}) {
  const [movies, setMovies] = useState([]);
  
  //It might that this link doesnt work 
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies); 
    return (
        <div className="videoCard">
          <h2>{title}</h2>

          <div className="row_posters">
          {movies.map(
            (movie) => 
          ((isLargeRow && movie.poster_path) ||
           (!isLargeRow && movie.backdrop_path)) && (
          
            <img 
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}/>
          )
          )}
          </div>
        
      </div>
    );
}

export default VideoCard
