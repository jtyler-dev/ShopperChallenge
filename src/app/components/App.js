import React from 'react';
import InstacartNavbar from './Navbar/InstacartNavbar';
import AppForm from './landingPage/ApplicationForm';
import LandingPage from './landingPage/LandingPage';
class App extends React.Component {
    render() {
        return(
            <div id="instacartApp">
              <InstacartNavbar />
              <LandingPage />


              {/* <div className="container">
                  <AppForm />
              </div> */}
          </div>

        );
    }
}

module.exports = App;
