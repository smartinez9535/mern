import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [heroes, setHeroes] = useState([]);

  //console.log("----------------------111;")

  useEffect(()=>{
    //console.log("--------------------333")
    axiosHeroes()
  }, [/*NEVER PUT STATE AND SETSTATE HERE! EMPTY BRACKET MEANS RUN ONCE*/]) //only triggers when the component finishes rendering

  //console.log("---------------------222")

  //fetch
  const fetchHeroes = () => {
    fetch("api url here")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        setHeroes(jsonResponse)
      })
      .catch(err => console.log(err))
  }

  //axios
  const axiosHeroes = () => {
    axios.get("api url here")
      .then(res => {
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => console.log(err))
  }
  //axiosHeroes(); makes this run forever

  let content = (
    heroes.length === 0 ?
    <h3>Please Wait, fetching data...</h3>
    :
    <table>
        <thead>
          <tr>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, i) => (
              <tr key={i}>
                <td> {hero.name} </td>
                <td> {hero.biography.fullName === "" ? "Unknown" : hero.biography.fullName} </td>
                <td> {hero.biography.publisher} </td>
                <td> {hero.appearance.gender} </td>
                <td> <img src={hero.images.xs} alt={`extra small name of ${hero.name}`} /> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
  )

  return (
    <div className="App">
      <h1>Superheroes API</h1>
      {/* <button onClick={fetchHeroes}>fetch Superheroes</button>
      <button onClick={axiosHeroes}>axios Superheroes</button> */}
      <hr />
      {content}
      <table>
        <thead>
          <tr>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, i) => (
              <tr key={i}>
                <td> {hero.name} </td>
                <td> {hero.biography.fullName === "" ? "Unknown" : hero.biography.fullName} </td>
                <td> {hero.biography.publisher} </td>
                <td> {hero.appearance.gender} </td>
                <td> <img src={hero.images.xs} alt={`extra small name of ${hero.name}`} /> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
