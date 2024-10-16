import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies}) => {
  return (
    <div className="px-4 md:px-10">
      <h1 className="py-4 text-lg md:text-2xl text-white font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar no-scrollbar">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
