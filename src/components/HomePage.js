import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
export function HomePage(){
    
    return(

        <div>
             <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Payment </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/cust">Customer List</Nav.Link>
            <Nav.Link as={Link} to="/empDash">Transaction List</Nav.Link>
            <Nav.Link as={Link} to="/tran">New Transfer</Nav.Link>
            <Nav.Link as={Link} to="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            {/* </MenuBar> */}
            <h1><center>Payment project Home page</center></h1>
        </div>
    );
}