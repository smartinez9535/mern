import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/products/:id">
          <Detail />
        </Route>
        <Route exact path="/products">
          <Main />
        </Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

