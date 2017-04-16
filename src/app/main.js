import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ShopperApp from './reducers/userReducer';

require('../scss/main.scss');

let store = createStore(ShopperApp);


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
