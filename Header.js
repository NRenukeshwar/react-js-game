import React,{useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

function Header(){

   const [isNavOpen, setIsNavOpen] = useState(false);
    return (
      
      <Navbar dark expand="md" style={{background:"linear-gradient(to left,#e66465, #9198e5, seagreen)"}}>
        <NavbarToggler onClick={isNavOpen?()=>setIsNavOpen(false):()=>setIsNavOpen(true)} />
        <NavbarBrand>
          <Link to="/" className="navbar-brand text-white">
            <h3>TicTacToe</h3>
          </Link>
        </NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link font-weight-bold" to="/singlePlayer">
                SinglePlayer
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link font-weight-bold" to="/twoPlayers">
                Two Players
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

export default Header;
