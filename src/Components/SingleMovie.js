import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  //   const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        const data = await response.json();
        setCast(data.cast);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    };

    fetchCast();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading cast details...</div>;
  }

  return (
    <div className="bg-gray-500 h-full w-full">
      <div className="flex flex-row p-4 h-auto ">
        <div className="justify-center items-center bg-gray-950 text-white rounded-xl p-2 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            className="rounded-lg w-2/3 h-1/3"
          />
          <h1 className="text-2xl font-bold mt-4">{movieDetails.title}</h1>
          <p className="mt-4 font-light">
            Overview:
            <br />
            {movieDetails.overview}
          </p>
          <p className="mt-4">Rating: {movieDetails.vote_average}</p>
          <p className="mt-4">Release Date: {movieDetails.release_date}</p>
          <p className="mt-4">
            Original language: {movieDetails.original_language}
          </p>
        </div>
        <div className="flex">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt=""
            className="rounded w-auto"
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold  ml-4 text-white">Cast</h1>
      <div className="flex flex-wrap">
        {cast.map((actor) => (
          <div key={actor.id} className="p-4 ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              className="rounded w-32 h-48"
            />
            <p className="mt-2 font-bold">{actor.name}</p>
            <p className="mt-1 font-semibold text-left">
              Character:{actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SingleMovie;
