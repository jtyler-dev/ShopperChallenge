import React from 'react';
import InstacartNavbar from './Navbar/InstacartNavbar';
import AppForm from './landingPage/ApplicationForm';
class App extends React.Component {
    render() {
        return(
            <div id="instacartApp">
              <InstacartNavbar />
              <div className="container">
                  <AppForm />
              </div>
          </div>

        );
    }
}

module.exports = App;
