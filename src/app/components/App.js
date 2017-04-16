import React from 'react';
import InstacartNavbar from './Navbar/InstacartNavbar';
import LandingPage from './landingPage/LandingPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem("userData")) {
            this.setState(JSON.parse(sessionStorage.getItem("userData")));
        }
    }

    componentWillUnmount() {
        sessionStorage.setItem("userData", "");
    }

    render() {
        return(
            <div id="instacartApp">
              <InstacartNavbar userData={this.state.userData}/>
              <LandingPage userData={this.state.userData}/>
          </div>
        );
    }
}

module.exports = App;
