import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <strong>FreshDetect</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "bold-link" : ""}
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {theme === "light" ? (
            <i className="fa-regular fa-sun" onClick={toggleTheme}></i>
          ) : (
            <i className="fa-regular fa-moon" onClick={toggleTheme}></i>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
