import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ageReducer from "./reducers/ageReducer.js";
//import ageResult from "./reducers/ageResult.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import registerServiceWorker from './registerServiceWorker';

/*const rootReducer = combineReducers({
    age: ageReducer,
    result: ageResult


});*/

const store = createStore(ageReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
