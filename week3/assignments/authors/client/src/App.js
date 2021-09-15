import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import Update from './views/Update';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite Authors</h1>
        <Route exact path="/edit/:id">
            <Update />
        </Route>
        <Route exact path="/new">
          <AuthorForm/>
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        
      </div>
    </BrowserRouter>
  );
}
    
export default App;

