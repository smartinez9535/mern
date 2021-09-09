import './App.css';
import {useState} from 'react';
import {Link, Switch, Route, Redirect, useHistory} from 'react-router-dom';
import Home from './components/Home';
import Person from './components/Person';
import Planet from './components/Planet';
import Error from './components/Error';

function App() {

  //set default values for request
  const[category = "people", setCategory] = useState();
  const[id = "0", setId] = useState();
  const history = useHistory();

  //take values from submitted forms and redirect to corresponding path
  const fetchItems = (e) => {
    e.preventDefault();

    if (category == "people"){
      history.push(`/people/${id}`)
    }
    else{
      history.push(`/planets/${id}`)
    }
  }

  return (
    <div className="App">
      <h1>Luke APIwalker</h1>

      {/* Form to request data from API */}
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
        <input style={{display: "inline-block"}} onChange={(e) => setId(e.target.value)} value={id} type="number" required/>

        <button style={{display: "inline-block"}}>Search</button>
      </form>
        
      <Switch>
        <Route path="/planets/:varNum">
          <Planet id={id}/>
        </Route>
        
        <Route path="/people/:varNum">
          <Person id={id}/>
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
