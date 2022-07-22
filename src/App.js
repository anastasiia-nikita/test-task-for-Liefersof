import React from "react";
import { useSelector } from "react-redux";
import { getUsersSelector } from './redux/selectors';
import { FormRegister } from "./components/FormRegister";
import { UserRow } from "./components/UserRow";
import styled from 'styled-components';
import GlobalStyle from './styles/global';

const App = () => {
  const users = useSelector(getUsersSelector);

  return (
    <>
    <GlobalStyle />
      <Container className="App">
        <FormRegister />
      </Container>

      {users.length !== 0 && (
        <Table>
          <thead>
            <tr>
              <Thead>First name</Thead>
              <Thead>Last Name</Thead>
              <Thead>Phone</Thead>
              <Thead>Email</Thead>
              <Thead>Gender</Thead>
              <Thead>Address</Thead>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <UserRow key={user.number} user={user}/>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

const Container = styled.div`
  background-color: #EAF2F8;
  width: 30%;
  margin: 0 auto 50px;
  border: 1px dashed black;
  border-radius: 8px;
  padding: 20px 50px;
  `

const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  `

const Thead = styled.th`
  font-weight: bold;
  padding: 20px;
  background: #efefef;
  border: 1px solid #dddddd;
  text-align: center;
  `

export default App;
