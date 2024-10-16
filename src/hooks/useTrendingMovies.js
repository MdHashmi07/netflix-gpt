import { useDispatch, useSelector } from "react-redux";
import { addTrendigMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  // Calling TMDB api and getting data   
  const trendingMovies = useSelector(store => store.movies.trendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTrendigMovies(json.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
