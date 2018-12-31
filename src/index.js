import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';



ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>, document.querySelector('#root')
);





// npm install --save redux react-redux
// Redux Cycle Notes
/* 
Action Creator => Action => dispatch => Reducers => State
    Action Creator: Function that returns a javascript object.
    Action: A javascript object with type property and a payload property.
    dispatch: Function that takes in an action, makes copies of that object and passes it off to different areas.
    Reducers: Function that takes in an action and some pre-existing data and make some adjustments to the data and return it.
    State: Central repo of data.
*/