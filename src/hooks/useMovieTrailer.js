import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useMovieTrailer = (movieId) => {
    const [trailerId, setTrailerId] = useState(null);
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      setTrailerId(trailer.key);
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);

    return trailerId;
}

export default useMovieTrailer