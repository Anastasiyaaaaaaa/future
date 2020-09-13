import React from "react";

export default (props) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => props.onSort("id")}>
            ID
            {props.sortField === "id" ? (
              <small>{props.sortSymbol}</small>
            ) : null}
          </th>
          <th onClick={() => props.onSort("firstName")}>
            First Name
            {props.sortField === "firstName" ? (
              <small>{props.sortSymbol}</small>
            ) : null}
          </th>
          <th onClick={() => props.onSort("lastName")}>
            Last Name
            {props.sortField === "lastName" ? (
              <small>{props.sortSymbol}</small>
            ) : null}
          </th>
          <th onClick={() => props.onSort("email")}>
            E-mail
            {props.sortField === "email" ? (
              <small>{props.sortSymbol}</small>
            ) : null}
          </th>
          <th onClick={() => props.onSort("phone")}>
            Phone
            {props.sortField === "phone" ? (
              <small>{props.sortSymbol}</small>
            ) : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.id + item.phone}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
