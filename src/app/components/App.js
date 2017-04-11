import React from 'react';
import InstacartNavbar from './Navbar/InstacartNavbar';
import LandingPage from './landingPage/LandingPage';
class App extends React.Component {
    render() {
        return(
            <div id="instacartApp">
              <InstacartNavbar />
              <LandingPage />
          </div>

        );
    }
}

module.exports = App;
