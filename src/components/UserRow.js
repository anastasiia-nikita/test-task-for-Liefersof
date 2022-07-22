import React from "react";
import styled from 'styled-components';

export const UserRow = ({ user }) => (
  <tr>
    <Td>{user.firstName}</Td>
    <Td>{user.lastName}</Td>
    <Td>{user.phone}</Td>
    <Td>{user.email}</Td>
    <Td>{user.gender}</Td>
    <Td>{user.address}</Td>
  </tr>
);

const Td = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: center;
`