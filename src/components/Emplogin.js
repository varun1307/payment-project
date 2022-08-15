import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export function Emplogin() {
  const [reply,setReply]=useState([])
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const {
    email,
    password
  } = userDetails;
  const navigate=useNavigate();
  const FormHandle = (e) => {
    e.preventDefault();
    console.log(userDetails);
    addDataToServer(userDetails);
  };

  const addDataToServer = (data) => {
    const dt = {
      email,
      password,
    };
    axios
      .post("http://localhost:8080/user/signin", dt)

      .then(
        (response) => {
          console.log(dt);
          //alert("Transaction Successfull");
        },
        (error) => {
          console.log(error);
          //alert("Operation failed");
        }
      );
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(userDetails)
    axios.post("http://localhost:8080/user/signin",
    {
      email: email,
      password: password
    }
    ).then((res)=>{console.log(res);setReply(res); })
    .catch(err=>console.log(err))

     if(reply.data==="Login Successful"){
       //this.context.router.history.push("/tran")
      navigate("/tran") 
    }
       else{
        //this.context.router.history.push("/login")
        navigate("/login")
       }
  }

 
 

  return (
    <div>
      <br></br>
      <h2>
      <center>Employee Login</center>
      </h2>
      <div className="form-demo">
        <div className="flex justify-content-center">
          <div className="card">
              <br></br>                                                      
              <div>                      
                <form onSubmit={(e) => handleSubmit(e)}>
                  Email                                
                  <div class="form-group">                                 
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                                                    
                  </div>
                  Password                                
                  <div class="form-group">
                                                        
                                                        
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                                                    
                  </div>
              <br></br>
              <Button type="submit" label="Login" className="p-button-sm" />
            </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
