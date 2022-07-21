import React from "react";
import { useSelector } from "react-redux";
import { getUsersSelector } from './redux/selectors';
import { FormRegister } from "./components/FormRegister";
import { UserRow } from "./components/UserRow";

const App = () => {
  const users = useSelector(getUsersSelector);
  console.log(users);

  return (
    <div className="App">
        <h1>Sign up</h1>
        <FormRegister />

    {users.length !== 0 && (
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <UserRow key={user.number} user={user}/>
          ))}
        </tbody>
      </table>
    )}
    </div>
  );
}

export default App;
