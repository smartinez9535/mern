import './App.css';
import React, {useState} from  'react';
import DisplayList from './components/DisplayList';
import ItemForm from './components/ItemForm';

function App() {

  const [allItems, setAllItems] = useState([
    {description: "test 1", complete: false},
    {description: "test 2", complete: false},
    {description: "test 3", complete: false}
  ]);

  const addNewItem = (newItemObj) => {
    console.log("app.sj function");
    //console.log(newUserObj);

    const newItemsArray = [...allItems];
    newItemsArray.push(newItemObj);
    setAllItems(newItemsArray);

    //alt way
    //setAllUsers([...allUsers, newUserObj]);
  }

  const crossOut = (idx) => {
    const updatedItems = allItems.map((item, i) => {
        if (idx === i) {
            item.complete = !item.complete;
        }
        return item
    });
    
    setAllItems(updatedItems);
  } 

  const remove = (idx) => {
      const filteredItems = allItems.filter((item, i) => {
          return i !== idx;
      });

      setAllItems(filteredItems);
  }

  return (
    <div className="App">
      <h1>app.js</h1>
      <ItemForm addNewItem={addNewItem}/>
      <legend>DisplayList.jsx</legend>
      <fieldset>
      {allItems.map((item, i) => {
        return (
          <DisplayList key={i} i={i} item={item} crossOut={crossOut} remove={remove} />
        );
      })}
      </fieldset>
    </div>
  );
}

export default App;
