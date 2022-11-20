import React, { useEffect, useState } from 'react'
import axios from './axios'
import Photos from "./Photos"
import "./Results.css"
import FlipMove from "react-flip-move"

const Results = ({selectedOption}) => {
    const [movies, setMovies] = useState([])    
    
    useEffect(()=> {
        const fetchData = async()=> {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
        };
        fetchData();
    }, [selectedOption]);


  return (
    <div className='results'>
        <FlipMove>
            {movies.map((movie) => (
                <Photos key={movie.id} movie={movie}/>
                ))}
        
        </FlipMove>
    </div>
  )
}

export default Results