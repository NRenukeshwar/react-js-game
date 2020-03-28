import React from "react";
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

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav=()=> {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <Navbar dark expand="md" style={{background:"linear-gradient(to left,#e66465, #9198e5, seagreen)"}}>
        <NavbarToggler onClick={this.toggleNav} />
        <NavbarBrand>
          <Link to="/" className="navbar-brand text-white">
            <h3>TicTacToe</h3>
          </Link>
        </NavbarBrand>
        <Collapse isOpen={this.state.isNavOpen} navbar>
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
}

export default Header;
