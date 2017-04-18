import React from 'react';
import InstacartNavbar from './Navbar/InstacartNavbar';
import LandingPage from './landingPage/LandingPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="instacartApp">
              <InstacartNavbar/>
              {this.props.children}
            </div>
        );
    }
}

module.exports = App;
