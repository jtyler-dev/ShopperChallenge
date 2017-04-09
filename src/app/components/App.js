import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
class App extends React.Component {
    render() {
        return(
            <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#"><img src="./img/instacartLogo.png"/></a>
                  </Navbar.Brand>
                   <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="#">Positions</NavItem>
                      <NavItem eventKey={2} href="#">FAQ</NavItem>
                      <NavItem eventKey={3} href="#">LOG IN</NavItem>
                    </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div className="container">
                  <div>Hello World</div>
              </div>
        </div>

        );
    }
}

module.exports = App;
