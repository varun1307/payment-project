import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
// import img3 from '../img3.png';
import img1 from '../img1.jpg';
import img2 from '../img2.png';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
export function HomePage(){
    
    return(

        <div Style="background: #606c88;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
         color:white;">
             <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Payment </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/tran">New Transfer</Nav.Link>
            <Nav.Link as={Link} to="/cust">Customer List</Nav.Link>
            <Nav.Link as={Link} to="/empDash">Transaction List</Nav.Link>
            <Nav.Link as={Link} to="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            {/* </MenuBar> */}
            <h2><center>Payment project</center></h2>
<div className="container"><br></br>
            <Carousel>
      <Carousel.Item >
        <center>
        <img
          className="d-block w-50 h-50"
          Style="width:640px;
          height:360px;"
          src={img1}
          alt="First slide"
        />
        </center>
      
<br></br><br></br>
      </Carousel.Item>
      <Carousel.Item>
      <center>
        <img
          className="d-block w-50 h-50"
          Style="width:640px;
          height:160px;"
          src={img2}
          alt="First slide"
        />
        </center>
        <br></br><br></br><br></br>

      </Carousel.Item>
      <Carousel.Item>
      <center>
        <img
          className="d-block w-50 h-50"
          Style="width:640px;
          height:360px;"
          src={img1}
          alt="First slide"
        />
        </center>
      
<br></br><br></br>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
    );
}