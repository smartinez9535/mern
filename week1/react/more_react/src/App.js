import './App.css';
import React, {useState} from 'react';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import DisplayUser from './components/DisplayUser';

function App() {

  const [allUsers, setAllUsers] = useState([
    {username: "jman", email: "j@m.com"},
    {username: "bob", email: "b@b.com"},
    {username: "cool", email: "c@c.com"}
  ]);

  const addNewUser = (newUserObj) => {
    console.log("app.sj function");
    console.log(newUserObj);

    const newUsersArray = [...allUsers];
    newUsersArray.push(newUserObj);
    setAllUsers(newUsersArray);
  }

  return (
    <fieldset>
      <legend>App.js</legend>
        <h1>app.js</h1>
        {/* {JSON.stringify(allUsers)} */}
        <UserForm addNewUser={addNewUser}/>
        <DisplayUser allUsers={allUsers}/>
    </fieldset>
  );
}

export default App;
