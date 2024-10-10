import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // Calling TMDB api and getting data   

  const getTopRatedMoviesMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMoviesMovies();
  }, []);
};

export default useTopRatedMovies;
