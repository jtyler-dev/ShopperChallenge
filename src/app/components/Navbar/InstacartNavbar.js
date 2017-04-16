import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, FormGroup, FormControl } from 'react-bootstrap';

class InstacartNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logInState : 1,
            email: ''
        };

        this.loginPressed = this.loginPressed.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    loginPressed(e) {
        e.preventDefault();

        this.setState({
          logInState : 2
        })
    }

    handleLogin(e) {
        e.preventDefault();
    }

    onEmailChange(e) {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    cancel(e) {
        e.preventDefault();

        this.setState({
          logInState : 1
        })
    }

    getNavItems() {
        switch (this.state.logInState) {
            case 1:
                return <Nav pullRight>
                            <NavItem eventKey={1} onClick={this.loginPressed}><span className="loginBtn"><span className="loginHover">LOG IN</span></span></NavItem>
                       </Nav>;
            case 2:
                return <Navbar.Form pullRight>
                            <FormGroup >
                                <FormControl type="email" placeholder="Email" id="email" onChange={this.onEmailChange}/>
                            </FormGroup>
                            {' '}
                            <Button type="submit" onClick={this.handleLogin}>Login</Button>
                            <Button type="submit" onClick={this.cancel}>Cancel</Button>

                      </Navbar.Form>;
            case 3:
                return <Nav pullRight>Hello</Nav>;
            }
    }

    render() {
        return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#"><img src="./img/instacartLogo.png"/></a>
                  </Navbar.Brand>
                   <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                        {this.getNavItems()}
                </Navbar.Collapse>
              </Navbar>
        );
    }
}

module.exports = InstacartNavbar;
