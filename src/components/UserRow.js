import React from "react";

export const UserRow = ({ user }) => (
  <tr>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.phone}</td>
    <td>{user.email}</td>
    <td>{user.gender}</td>
    <td>{user.address}</td>
  </tr>
);