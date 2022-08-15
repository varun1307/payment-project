import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export function Emplogin() {
  const [usernameOrEmail, setName] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate();
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    
    axios.post("https://929c-52-66-229-253.in.ngrok.io/signin",
    
    {
      usernameOrEmail: usernameOrEmail,
      password: password
    }

    ).then((res)=>{console.log(res); navigate("/tran") })
    .catch(err=>console.log(err))
  }

 
 

  return (
    <>
    <br></br>
    <h2><center>Employee Login</center></h2>
      <div className="form-demo">
        <div className="flex justify-content-center">
          <div className="card">
              <form onSubmit={handleSubmit}>
            <span className="p-float-label">
              <InputText
                id="usernameOrEmail"
                name="usernameOrEmail"
                
              />
              <label htmlFor="username">Username</label>
            </span>
            <br></br>
            <span className="p-float-label">
              <InputText
                type="password"
                id="password"
                name="password"
                
              />
              <label htmlFor="password">Password</label>
            </span>
            <br></br>
            <Button label="Login" className="p-button-sm"/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
