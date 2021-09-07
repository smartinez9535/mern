import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox';


function App() {

  const [allBoxes, setAllBoxes] = useState([
    {color: "red"},
    {color: "blue"},
    {color: "green"}
  ]);

  const addNewBox = (newBoxObj) => {
    console.log("app.sj function");
    console.log(newBoxObj);

    const newBoxesArray = [...allBoxes];
    newBoxesArray.push(newBoxObj);
    setAllBoxes(newBoxesArray);

    //alt way
    //setAllUsers([...allUsers, newUserObj]);
  }

  return (
    <fieldset>
      <legend>App.js</legend>
        <h1>app.js</h1>
        {/* {JSON.stringify(allUsers)} */}
        <BoxForm addNewBox={addNewBox}/>
        <DisplayBox allBoxes={allBoxes}/>
    </fieldset>
  );
}

export default App;
