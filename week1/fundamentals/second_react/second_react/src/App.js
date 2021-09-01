import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  const animals = ["lion", "giraffe", "zebra"];

  return (
    <div className="App">
      <h1>This is app.js</h1>
      <hr />

      <ClassComponent animals={animals}/>
      <FunctionalComponent animals={animals} x={90}/>
    </div>
  );
}

export default App;
