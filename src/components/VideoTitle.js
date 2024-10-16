import React from 'react';
import playButton from "../images/play-solid.svg"

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-52 sm:pt-56 md:pt-72 ps-8 md:px-20 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'> 
      <h1 className='font-bold text-2xl md:text-5xl'>{title}</h1>
      <p className='hidden md:inline-block w-1/4 py-4 font-medium'>{overview}</p>

      <div className='my-2 md:my-4 flex gap-5'>
        <button className='text-sm md:text-lg bg-white text-black py-1 md:py-3 px-4 md:px-14 font-bold rounded-md flex gap-1 md:gap-2 items-center hover:opacity-80'><img src={playButton} alt="playButton" className='w-2 md:w-4' />Play</button>
        <button className='hidden md:block text-sm md:text-lg bg-sky-100 md:py-3 md:px-12 font-bold rounded-md bg-opacity-55'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
