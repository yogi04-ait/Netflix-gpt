import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if(!movies) return;

  const mainMovie = movies[randomNumber(0,19)];
  const {original_title, overview, id} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview = {overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer