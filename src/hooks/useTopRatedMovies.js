import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // Calling TMDB api and getting data   
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

  const getTopRatedMoviesMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
   !topRatedMovies && getTopRatedMoviesMovies();
  }, []);
};

export default useTopRatedMovies;
