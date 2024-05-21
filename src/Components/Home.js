import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const SingleMovie = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="bg-gray-500 ">
      <h1 className="cursor-pointer hover:underline text-xl font-bold font-serif">
        Popular Movies
      </h1>
      <div className="flex flex-wrap justify-around ">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="w-72 m-5 p-5 border-0 rounded-md shadow-md cursor-pointer"
            onClick={() => SingleMovie(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="rounded "
            />
            <div className="flex flex-col items-center text-white ">
              <h2 className="font-semibold ">{movie.title}</h2>
              <p className="font-semibold mt-1">Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
