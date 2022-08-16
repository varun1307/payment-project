import React, {useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

export function TransactionPage() {
  
const [message, setMessage] = useState('');
// const handleChange = event => {
//   setMessage(event.target.value);
// };

// const [details, setDetails] = useState([])
// // const handleDetails=()=>{
// //   useEffect(() => {
// //     axios.get("https://da28-52-66-229-253.in.ngrok.io/customerDetails/")
// //       .then(res => setDetails(res.data))
// //       console.log(res.data)
// //             .catch(err => console.log("Couldnt fetch customer details"))
// //   }, []);
// // }




// // const [transaction, setTransaction] = useState([])
// useEffect(() => {
//   axios.get("https://da28-52-66-229-253.in.ngrok.io/customerDetails/")
//     .then(res => setDetails(res.data))
//     console.log(details)
//           .catch(err => console.log("Couldnt fetch customer details"))
// }, []);



const getData = () =>{

  axios.get("https://da28-52-66-229-253.in.ngrok.io/customerDetails/")
   
  .then(res=>{
      console.log(res)
      res = res.data; //just for working only with the data..
      
  })
  .catch(e=> {
      console.log(e.response.data)
  })
}


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
      .post("https://da28-52-66-229-253.in.ngrok.io/transaction/transfer", dt)

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
                                            
                <form>
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
                    <br></br>
                    <button
                      onClick={getData}
                      class="btn btn-outline-primary text-center mr-2"
                    >
                      Get Details
                    </button>
                                                    
                  </div>
                  <br></br>
                  Sender Account Holder Name                                 
                  <div class="form-group">
                                                                         
                    <input
                      type="text"
                      class="form-control"
                      name="senderAccountHolderName"
                      placeholder="Sender Account Holder Name"
                      // value={details[accountHolderName]}
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
                      // value={details[clearBalance]}
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
                      // value={details.receiverAccountNumber}
                      onChange={(e) => onInputChange(e)}
                    />
                                                    
                  </div>
                  <button
                    // onClick={GetDetails}
                    class="btn btn-outline-primary text-center mr-2"
                  >
                    Get Details
                  </button>
                  <br></br>
                  <br></br>
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
                      onClick={FormHandle}
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
