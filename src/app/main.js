import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ShopperApp from './reducers/userReducer';

import LandingPage from './components/landingPage/LandingPage';
import UserEdit from './components/user/userEdit';

import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'


require('../scss/main.scss');

let store = createStore(ShopperApp);


ReactDom.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={LandingPage} />
                <Route path="/user" component={UserEdit} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
);
