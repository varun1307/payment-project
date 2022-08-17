import React, { useState, useEffect } from "react";

import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export function CustomerList() {
  ////spring boot/////

  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/customerDetails/")
      .then((res) => setCustomerList(res.data))
      .catch((err) => console.log("Couldnt fetch customer List"));
  }, []);

  ////spring boot/////

  return (
    <>
      <h2>
        <center>All Senders</center>
      </h2>

      <div className="container">
        <h3>
          <Link
            style={{ display: "flex", justifyContent: "flex-middle" }}
            to="/home"
          >
            Back
          </Link>
        </h3>
        <Table border="1" cellPadding="10">
          <tr>
            <th>Sender ID</th>
            <th>Sender Name </th>
            <th>Sender Balance</th>
            <th>Over Draft</th>
          </tr>
          {customerList.map((c) => (
            <tbody>
              <tr key={c.customerId}>
                <td>{c.customerId}</td>
                <td>{c.accountHolderName}</td>
                <td>{c.clearBalance}</td>
                <td>{c.overDraft}</td>
                {/* <td><Link to="/show">Show More</Link></td> */}

                {/* <td><Link to={"/details/"+c.transactionId}>show more</Link></td> */}
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
}
