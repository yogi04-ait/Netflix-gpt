import React from 'react'
import { useState } from 'react';
import { IMG_CDN } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.3s ease-in-out', // Smooth transition effect
  };
  return (
    <div className='w-40 ' onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
        <img alt="poster" style={imageStyle}
        className='poster-image rounded-lg'src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard