import React from 'react';
import playButton from "../images/play-solid.svg"

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-72 px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'> 
      <h1 className='font-bold text-5xl'>{title}</h1>
      <p className='w-1/4 py-4 font-medium'>{overview}</p>

      <div className='my-4 flex gap-5'>
        <button className='text-lg bg-white text-black py-3 px-14 font-bold rounded-md flex gap-2 items-center hover:opacity-80'><img src={playButton} alt="playButton" className='w-4' />Play</button>
        <button className='text-lg bg-sky-100 py-3 px-12 font-bold rounded-md bg-opacity-55'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
