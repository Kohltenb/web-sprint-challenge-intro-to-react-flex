import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
  <div className="App">
    <h1 className="Header">Star Wars Characters</h1>
    {data.map(character => {
      return (
      <Character char={character} key={character.height}/>
      ) 
    })}
  </div>
  );
}

export default App;
