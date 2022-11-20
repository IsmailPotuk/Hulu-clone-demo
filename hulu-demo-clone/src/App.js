import React from 'react'
import Header from './Header';
import "./App.css"
import Navbar from './Navbar';
import request from './request';
import { useState } from 'react';
import Results from './Results';


function App ()  {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
  console.log(selectedOption);
  return (
    <div className="App">
      <Header/>  
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
          
   
    
  );
}

export default App