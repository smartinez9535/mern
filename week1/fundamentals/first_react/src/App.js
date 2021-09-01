import './App.css';
import SomeClassComponent from './components/SomeClassComponent';
import PropsComponent from './components/PropsComponent';

function App() {

const message = "this is my message";
const animals = ["tiger", "elephant", "zebra"];
const person = {
  name: "bob",
  favFood: "pizza",
  age: 33
}
  return (
    <div>
      <h1>hello</h1>
      <h3>
      </h3>
      <p>this is a test!!!</p>

        <SomeClassComponent person={person}/>
        <hr/>
        <PropsComponent message={message} x={3} animals={animals}/>
    </div>
  );
}

export default App;
