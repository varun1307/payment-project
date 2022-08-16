import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
export function MenuBar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">DBS Bank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/tran">Make Transaction</Nav.Link>
            <Nav.Link as={Link} to="/empdash">Transaction List</Nav.Link>
            <Nav.Link as={Link} to="/cust">View Customers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}
