import './App.css';
import {useState, useEffect} from 'react';
import {Link, Switch, Route, Redirect, useHistory} from 'react-router-dom';
import Home from './components/Home';
import Person from './components/Person';
import Planet from './components/Planet';
import Error from './components/Error';
import axios from 'axios';

function App() {

  const [person, setPerson] = useState({});
  const [planet, setPlanet] = useState({});

  const[category = "people", setCategory] = useState();
  const[id = "0", setId] = useState();
  const history = useHistory();

   //axios
  const axiosPerson = (id) => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(res => {
        console.log(res.data)
        setPerson(res.data)
      })
      .catch(err => history.push("/error"))
  }

  const axiosPlanet = (id) => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(res => {
        console.log(res.data)
        setPlanet(res.data)
      })
      .catch(err => history.push("/error"))
  }

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    console.log(newCategory)
  }

  const fetchItems = (e) => {
    e.preventDefault();

    if (category == "people"){
      axiosPerson(id);
      history.push(`/people/${id}`)
    }
    else{
      axiosPlanet(id);
      history.push(`/planets/${id}`)
    }
  }

  return (
    <div className="App">
      <h1>Luke APIwalker</h1>

      <form onSubmit={fetchItems} action="">
        <h4 style={{display: "inline-block"}}>Search for: </h4>
        <select style={{display: "inline-block"}}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option id="op1" value="people">People</option>
          <option id="op2" value="planets">Planets</option>
        </select>
        <h4 style={{display: "inline-block"}}>ID: </h4>
        <input style={{display: "inline-block"}} onChange={(e) => setId(e.target.value)} type="number" required/>
        <button style={{display: "inline-block"}}>Search</button>
      </form>
        
      <Switch>
        <Route path="/planets/:varNum">
          <Planet planet={planet}/>
        </Route>
        
        <Route path="/people/:varNum">
          <Person person={person}/>
        </Route>

        <Route path="/error">
          <Error />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
