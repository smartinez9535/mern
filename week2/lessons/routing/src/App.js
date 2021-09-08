import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Result from './components/Result';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <p>
        <Link to="/">Home</Link>
        |
        <Link style={{backgroundColor: "red"}}to="/about">About</Link>   
      </p>

        
      <Switch>

        {/* <Redirect from="/" to="/form"></Redirect> */}

        <Route path="/result/:varName1/:varName2">
          <Result/>
        </Route>

        <Route path="/form">
          <Form />
        </Route>

        <Route exact path="/">
          <Home />
          <About/>
        </Route>

        
      </Switch>
    </div>
  );
}

export default App;
