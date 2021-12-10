import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setupWorker, rest } from 'msw';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  // this effect happens after first render
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      console.log('response', response.data);
      // set list of characters into state
      setCharacters(response.data);
    })
    .catch(error => {
      console.error(error);
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
  
}

export default App;
