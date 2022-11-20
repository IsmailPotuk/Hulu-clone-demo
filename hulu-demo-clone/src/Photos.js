import React from 'react'
import TextTruncate from "react-text-truncate"

import "./Photos.css"
import {forwardRef} from "react"

const base_url = "https://image.tmdb.org/t/p/original"

const Photos= forwardRef (({movie},ref ) => {
  return (
    <div className='Photos' ref={ref}>
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText='...'
        text={movie.overview}
      />

      <h2> {movie.title || movie.original_name} </h2>
      <p className='Photos__stats'> 
        {movie.title && `${movie.original_type} •`}
        {movie.release_date || movie.fist_air_date}• 
        {""}{movie.vote_count}
         
        
        
      </p>

    </div>
  ) 
})

export default Photos