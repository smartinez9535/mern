import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import VarColors from './components/VarColors';
import SingleVar from './components/SingleVar';

function App() {
  return (
    <div className="App">
      <h1>Routing Practice</h1>

        
      <Switch>
        <Route path="/:varName/:colorName1/:colorName2">
          <VarColors/>
        </Route>
        
        <Route path="/welcome">
          <Home />
        </Route>

        <Route path="/:varName">
          <SingleVar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
