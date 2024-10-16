import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo  = useSelector(state => state.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div className="pt-[35%] sm:pt-[20%] md:pt-0 w-screen p-0 object-cover">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&showinfo=0&controls=0&rel=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
