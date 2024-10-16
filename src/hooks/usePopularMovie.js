import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // Calling TMDB api and getting data   
  const popularMovies = useSelector(store => store.movies.popularMovies);

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovie();
  }, []);
};

export default usePopularMovies;