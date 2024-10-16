import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch(); 
  
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
  
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();

    const getMovieTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = getMovieTrailer.length
      ? getMovieTrailer[0]
      : getMovieTrailer;
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
