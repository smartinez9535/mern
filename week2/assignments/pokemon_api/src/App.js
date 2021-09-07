import './App.css';
import {useState, useEffect} from 'react';
//import axios from 'axios';

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  //console.log("----------------------111;")

/*  useEffect(()=>{
    //console.log("--------------------333")
    fetchPokemon()
  }, [/*NEVER PUT STATE AND SETSTATE HERE! EMPTY BRACKET MEANS RUN ONCE*/ //]) //only triggers when the component finishes rendering */

  //console.log("---------------------222")

  //fetch
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        setPokemonList(jsonResponse)
      })
      .catch(err => console.log(err))
  }

  /* //axios
  const axiosHeroes = () => {
    axios.get("api url here")
      .then(res => {
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => console.log(err))
  }
  //axiosHeroes(); makes this run forever */

  let content = (
    pokemonList.length === 0 ?
    <h3>Please Wait, fetching data...</h3>
    :
    <div style={{alignContent: "center"}}>
      {
        pokemonList.results.map((pokemon, i) => (
            <li key={i}> {pokemon.name} </li>
        ))
      }
    </div>
  )

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
     {/*  <button onClick={axiosHeroes}>axios Superheroes</button> */}
      {content}
      
    </div>
  );
}

export default App;
