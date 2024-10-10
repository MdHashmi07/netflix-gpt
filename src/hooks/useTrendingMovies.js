import { useDispatch } from "react-redux";
import { addTrendigMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  // Calling TMDB api and getting data   

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTrendigMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
