import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieName, gptMovieResults } = useSelector((store) => store.gpt);

  if(!gptMovieName) return null;

  return (
    <div className="m-2 md:m-4 bg-black bg-opacity-80 rounded-lg">
      {gptMovieName.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMovieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
