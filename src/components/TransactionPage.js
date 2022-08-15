import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

export function TransactionPage() {
  const [message, setMessage] = useState('');
const handleChange = event => {
  setMessage(event.target.value);
};

const handleClick = () => {
  // 👇️ clear input value
  setMessage('');
};

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
      .post("https://c109-43-205-109-142.in.ngrok.io/transaction/transfer", dt)

      .then(
        (response) => {
          console.log(dt);
          alert("Transaction Successfull");
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
                      placeholder="CLear Balance"
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
                  Message Code                                 
                  <div class="form-group">
                                                        
                    <Form.Select
                      onChange={(e) => onInputChange(e)}
                      aria-label="Default select example"
                    >
                      <option>Select Message Code</option>
                      <option value="CHQB">CHQB</option>{" "}
                      <option value="CORT">CORT</option>{" "}
                      <option value="HOLD">HOLD</option>{" "}
                      <option value="INTC">INTC</option>{" "}
                      <option value="PHOB">PHOB</option>{" "}
                      <option value="PHOI">PHOI</option>{" "}
                      <option value="PHON">PHON</option>{" "}
                      <option value="REPA">REPA</option>{" "}
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
                                                        
                    <button
                    onClick={handleClick}
                      type="reset"
                      class="btn btn-outline-primary text-center mr-2"
                    >
                      Clear
                    </button>
                                                    
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
