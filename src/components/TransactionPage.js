import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
export function TransactionPage() {
  // const [transactionResponse, setTransactionResponse] = useState([]);
  const navigate = useNavigate();

  const [customerDetails, setCustomerDetails] = useState([]);

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

  const getDataIndividual=(e)=>{
    e.preventDefault();
      axios
      .post("http://localhost:8080/customerDetails/id", {customerId:sender})
      .then(
        (res) => {
          if(res.data==''){
            alert("Invalid Id")
          }
          
          setCustomerDetails(res.data)
          console.log(customerDetails)
        },
        (error) => {
          console.log(error);
          alert("Invalid");
        }
      );
      }
    
  
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
          // setTransactionResponse(res);
          if (res.data === "Transaction is successfull") {
            alert("Transaction Successfull");
            navigate("/empdash");
          } else {
            alert(res.data);
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
      <h3><Link style={{display: 'flex', justifyContent: 'flex-middle'}} to="/home">Back</Link></h3>

        <div Style="display:flex;">
                          
          <div className="w-75 mx-auto shadow  mt-2 bg-light">
                                
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
                  <button
                      onClick={e=>getDataIndividual(e)}
                      class="btn btn-outline-primary text-center mr-2">
                      Get Details
                    </button>
                    <br></br>
                    <br></br>
                  Sender Account Holder Name                                 
                  <div class="form-group">
                                                        
                                                        
                    <input
                     // type="text"
                      class="form-control"
                      name="senderAccountHolderName"
                      placeholder="Sender Account Holder Name"
                      value={customerDetails.accountHolderName}
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
                      value={customerDetails.clearBalance}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  <br></br>
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
                      class="btn btn-primary my-2 text-center mr-2"
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
