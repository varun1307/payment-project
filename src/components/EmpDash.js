import React, { useState, useEffect } from "react";

import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
export function EmpDash() {


  ////spring boot/////

  const [transaction, setTransaction] = useState([])
  useEffect(() => {
    axios.get("https://929c-52-66-229-253.in.ngrok.io/transaction")
      .then(res => setTransaction(res.data))
            .catch(err => console.log("Couldnt fetch customer details"))
  }, []);


  ////spring boot/////

  return (
    <>
    <h2><center>All Transactions</center></h2>
    <div className="container">
        <Table border="1" cellPadding="10">
          <tr>
            <th>id</th>
            <th>Sender ID</th>
            <th>Receiver BIC</th>
            <th>Receiver Name</th>
            <th>Amount</th>
          </tr>
          {
            transaction.map(c => (
              <tbody>
              <tr key={c.transactionId}>
                  <td>{c.transactionId}</td>
                  <td>{c.sender.customerId}</td>
                  

                  <td>{c.bank.bic}</td>
                  <td>{c.receiverAccountHolderName}</td>

                <td>{c.amount}</td>
                <td><Link>show more</Link></td>
                
                
                
                
              </tr>
              </tbody>
            ))
          }
        </Table>
      </div>
      </>
  );
}
