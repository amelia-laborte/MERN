import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=808")
      .then ((response) => {
        console.log(response.data.results);
        setPokemonData(response.data.results);
      })
      .catch((err) => console.log(err));
  },[]);
  
  return (
    <div className="App">
      <h1>I Gotta CatchUm All!</h1>
      <h3>........all 807 of them.</h3>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li className="pokemon_names" key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
