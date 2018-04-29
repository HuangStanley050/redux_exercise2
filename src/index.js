import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ageReducer from "./reducers/ageReducer.js";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    age: ageReducer


});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
