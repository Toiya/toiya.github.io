import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

console.log("Your process.env.PUBLIC_URL", process.env.PUBLIC_URL);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
