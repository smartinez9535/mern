import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  //console.log("----------------------111;")

/*  useEffect(()=>{
    //console.log("--------------------333")
    fetchPokemon()
  }, [/*NEVER PUT STATE AND SETSTATE HERE! EMPTY BRACKET MEANS RUN ONCE*/ //]) //only triggers when the component finishes rendering */

  //console.log("---------------------222")

/*   //fetch
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        setPokemonList(jsonResponse)
      })
      .catch(err => console.log(err))
  } */

  //axios
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        console.log(res.data)
        setPokemonList(res.data)
      })
      .catch(err => console.log(err))
  }
  //axiosHeroes(); makes this run forever

  let content = (
    pokemonList.length === 0 ?
    <h3>Please press the button</h3>
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
      {/* <button onClick={fetchPokemon}>Fetch Pokemon</button> */}
      <button onClick={axiosPokemon}>Axios Pokemon</button>
      {content}
      
    </div>
  );
}

export default App;
