import Container from "react-bootstrap/Container";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { useAuth } from "../context/Auth/AuthContext";
import Icon from "../assets/dev-modules-icon.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Navigation() {
    const [theme, setTheme] = useState('dark')
    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        const html = document.querySelector('html');
        html.setAttribute('data-bs-theme', theme === 'dark' ? 'light' : 'dark');
    }
  const { userSession } = useAuth();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            className="me-2"
            src={Icon}
            alt="Bootstrap"
            width="30"
            height="24"
          />
          Operative Modules
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/documents' className='nav-link'>Documentos</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text className="me-3">
            {userSession && userSession.user.email}
          </Navbar.Text>
          <Button onClick={handleTheme}>
            <i className="bi bi-sun"></i>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
