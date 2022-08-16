import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { MenuBar } from "./NavBar";
import {FaUserAlt} from 'react-icons/fa';
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
        },
        (error) => {
          console.log(error);
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
    ).then((res)=>{
      console.log(res);
      setReply(res); 
      if(reply.data=="Login Successful"){
        //alert("Login Successfull")
        navigate("/home") 
      }
         else{
          //alert("Invalid credentials")
          navigate("/")
         }})
    .catch(err=>console.log(err))

    
  }

 
 

  return (
    <div style={{ 
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BDrAavunUiLqkl_GdDwTxTOOIUeXHLAZfQ&usqp=CAU")` 
    }}>
    <div className="container" >
     
      <div className="form-demo" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
        <div style={{margin:0}} className="flex justify-content-center">
          <div className="card" >
            <br></br>
          <h2><center>Employee Login</center></h2>                                                      
              <div><center>
                 <h1 style={{margin:0}}><center><FaUserAlt></FaUserAlt></center></h1>        
                <form className="flex justify-content-center" onSubmit={(e) => handleSubmit(e)}>
                  Email                                
                  <div class="form-group">                                 
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="Enter your email"
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
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                                                 
                  </div>
              <br></br>
              <Button type="submit" label="Login" className="p-button-sm" />
            </form>
             </center>   
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}
