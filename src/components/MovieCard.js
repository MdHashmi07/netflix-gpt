import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className= 'w-[8.1rem] md:w-48'>
      <img src={IMG_CDN_URL + posterPath} alt="movie cards" />
    </div>
  )
}

export default MovieCard
