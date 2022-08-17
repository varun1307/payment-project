import React, { useState, useEffect } from "react";

import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export function EmpDash() {
  ////spring boot/////

  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/transaction/")
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log("Couldnt fetch customer details"));
  }, []);

  // const [transactionIndividual, setTransactionIndividual] = useState([]);
  // const getDataIndividual=(e)=>{
  //   e.preventDefault();
  //     axios
  //     .post("http://localhost:8080/transaction/id", {transactionId:transaction.transactionId})
  //     .then(
  //       (res) => {
  //         setTransactionIndividual(res.data)
  //         console.log(transactionIndividual)
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //     }
  ////spring boot/////

  return (
    <>
      <h2>
        <center>All Transactions</center>
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
            <th>id</th>
            <th>Sender ID</th>
            <th>Sender Account Name</th>
            <th>Receiver BIC</th>
            <th>Receiver Name</th>
            <th>Amount</th>
            <th>Transaction Time</th>
            <th>Status</th>
          </tr>
          {transaction.map((c) => (
            <tbody>
              <tr key={c.transactionId}>
                <td>{c.transactionId}</td>
                <td>{c.sender.customerId}</td>
                <td>{c.sender.accountHolderName}</td>
                <td>{c.bank.bic}</td>
                <td>{c.receiverAccountHolderName}</td>
                <td>{c.amount}</td>
                <td>{c.transactionTime}</td>
                <td>{c.status}</td>
                
                {/* <button
                      onClick={e=>getDataIndividual(e)}
                      class="btn btn-outline-primary text-center mr-2">
                      Show More
                  </button> */}
                <td><Link  to={"/details/"+`${c.transactionId}`}>show more</Link></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
}
