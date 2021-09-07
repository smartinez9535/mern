import './App.css';
import React, { useState } from  'react';
import Tabs from './components/Tabs';

function App() {

  const [allTabs, setAllTabs] = useState([
    {label: "Tab 1", content: "Tab 1 content"},
    {label: "Tab 2", content: "Tab 2 content"},
    {label: "Tab 3", content: "Tab 3 content"}
  ]);

  return (
    <div className="App">
      <h1>app.js</h1>
      <Tabs allTabs={allTabs}/>
    </div>
  );
}

export default App;
