import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/Main';
import ViewOne from './components/ViewOne';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to="/">Home</Link> | <Link to="/notes/new">Create</Link>
      <hr />

      <Switch>
        
        {/* UPDATE */}
        <Route exact path="/notes/update/:id">
          <Update/>
        </Route>

        <Route exact path="/">
          <Redirect to="/notes"></Redirect>
        </Route>

        {/* READ ALL */}
        <Route exact path="/notes">
          <Main/>
        </Route>

        {/* CREATE */}
        <Route exact path="/notes/new">
          <Create/>
        </Route>

        {/* READ ONE */}
        <Route exact path="/notes/:id">
          <ViewOne/>
        </Route>

        

        


      </Switch>
    </div>
  );
}

export default App;
