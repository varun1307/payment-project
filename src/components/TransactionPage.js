import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
export function TransactionPage() {
  const [transactionResponse, setTransactionResponse] = useState([]);
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:8080/customerDetails/")
      .then((res) => {
        console.log(res);
        setCustomerDetails(res);
        //just for working only with the data..
      })
      .catch((e) => {
        console.log("Couldnt fetch  details");
      });
  };

  let customerId = 8302081782860;
  function getSellerAnalyticsTotals() {
    return axios.get(`http://localhost:8080/customerDetails/${customerId}`);
  }
  const [transaction, setTransaction] = useState({
    sender: "",
    bal: "",
    senderAccountHolderName: "",
    bank: "",
    receiverAccountHolderName: "",
    receiverAccountNumber: "",
    transferType: "",
    messageCode: "",
    amount: "",
    transactionTime: new Date().toLocaleString(),
  });

  const onInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const {
    sender,
    bal,
    bank,
    senderAccountHolderName,
    receiverAccountHolderName,
    receiverAccountNumber,
    transferType,
    messageCode,
    amount,
    transactionTime = new Date().toLocaleString(),
  } = transaction;
  const FormHandle = (e) => {
    e.preventDefault();
    console.log(transaction);
    addDataToServer(transaction);
  };
  const addDataToServer = (data) => {
    const dt = {
      sender: {
        customerId: sender,
      },
      bank: {
        bic: bank,
      },
      receiverAccountHolderName,
      receiverAccountNumber,
      transferType: {
        transferTypeCode: transferType,
      },
      messageCode: {
        messageCode,
      },
      amount,
      transactionTime,
    };
    axios
      .post("http://localhost:8080/transaction/transfer", dt)

      .then(
        (res) => {
          console.log(dt);
          console.log(res);
          setTransactionResponse(res);
          if (transactionResponse.data === "Transaction is successfull") {
            alert("Transaction Successfull");
            navigate("/empdash");
          } else {
            alert(transactionResponse);
            navigate("/tran");
          }
        },
        (error) => {
          console.log(error);
          alert("Operation failed");
        }
      );
  };
  return (
    <div>
                  
      <div className="container">
        <div Style="display:flex;">
                          
          <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                                
            <div class="jumbotron">
                                      
              <h1 class="display-4 text-center">Make Transaction!</h1>
                                      
              <div>
                                            
                <form onSubmit={(e) => FormHandle(e)}>
                  Customer ID                                 
                  <div class="form-group">
                                                        
                                                        
                    <input
                      type="number"
                      class="form-control"
                      name="sender"
                      placeholder="Customer ID"
                      value={sender}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  Sender Account Holder Name                                 
                  <div class="form-group">
                                                        
                                                        
                    <input
                      type="text"
                      class="form-control"
                      name="senderAccountHolderName"
                      placeholder="Sender Account Holder Name"
                      value={senderAccountHolderName}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  Clear Balance                                 
                  <div class="form-group">
                                                        
                    <input
                      type="text"
                      class="form-control"
                      name="bal"
                      placeholder="Clear Balance"
                      value={bal}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  Receiver Account Number                                 
                  <div class="form-group">
                                                        
                    <input
                      type="number"
                      class="form-control"
                      name="receiverAccountNumber"
                      placeholder="Receiver Account Number"
                      value={receiverAccountNumber}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  Transfer Type                                 
                  <div class="form-group">
                                                        
                    <Form.Select
                      name="transferType"
                      onChange={(e) => onInputChange(e)}
                      aria-label="Default select example"
                    >
                      <option>Select Transfer Type</option>
                      <option value="Customer Transfer">
                        Customer Transfer
                      </option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </Form.Select>
                  </div>
                  <br></br>
                  Message Code
                                                  
                  <div class="form-group">
                                             
                    <Form.Select
                      name="messageCode"
                      onChange={(e) => onInputChange(e)}
                      aria-label="Default select example"
                    >
                      <option>Select Message Code</option>
                      <option value="CHQB">CHQB</option>
                      <option value="CORT">CORT</option>
                      <option value="HOLD">HOLD</option>
                      <option value="INTC">INTC</option>
                      <option value="PHOB">PHOB</option>
                      <option value="PHOI">PHOI</option>
                      <option value="PHON">PHON</option>
                      <option value="REPA">REPA</option>
                      <option value="SDVA">SDVA</option>
                    </Form.Select>
                                                    
                  </div>
                  Amount                                 
                  <div class="form-group">
                                                        
                    <input
                      type="number"
                      class="form-control"
                      name="amount"
                      placeholder="Enter Here"
                      value={amount}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  Receiver Account Holder Name                             
                  <div class="form-group">
                                                        
                    <input
                      type="text"
                      class="form-control"
                      name="receiverAccountHolderName"
                      placeholder="Enter Here"
                      value={receiverAccountHolderName}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  Bank bic                            
                  <div class="form-group">
                                                        
                    <input
                      type="text"
                      class="form-control"
                      name="bank"
                      placeholder="Enter Here"
                      value={bank}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                                                                          
                                                  
                  <div className="container text-center">
                                                        
                    <button
                      type="submit"
                      class="btn btn-outline-secondary my-2 text-center mr-2"
                    >
                      Send
                    </button>
                                                        
                    {/* <button
                    onClick={handleClick}
                      type="reset"
                      class="btn btn-outline-primary text-center mr-2"
                    >
                      Clear
                    </button> */}
                                                    
                  </div>
                                              
                </form>
                                        
              </div>
                                  
            </div>
                            
          </div>
                      
        </div>
                
      </div>
    </div>
  );
}
