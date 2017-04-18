import React from 'react';
import { connect } from 'react-redux';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, FormGroup, FormControl } from 'react-bootstrap';
import * as UserActions from '../../actions/userActions';
import { Link } from 'react-router-dom'

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
            }
    }

    render() {
        let loginLoc = this.getNavItems();
        if(this.props.userData.email) {
            // had to write a custom solution, becasue Link and react-bootstrap Navbar
            // didnt want to play nice
            loginLoc = <ul className="nav navbar-nav navbar-right">
                            <li role="presentation" className="">
                                <Link to="/user">
                                   <span className="userInfo">
                                        Hello, {this.props.userData.first_name}
                                      </span>
                                </Link>
                            </li>
                        </ul>
        }
        return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                      <Link to="/">
                        <img src="./img/instacartLogo.png"/>
                      </Link>
                  </Navbar.Brand>
                   <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                        {loginLoc}
                </Navbar.Collapse>
              </Navbar>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.userData
    userData: state.userData
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.setUserData
    setUserData: data => dispatch(UserActions.setUserData(data))
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(InstacartNavbar);
