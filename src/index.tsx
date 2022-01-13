import React from 'react';
import ReactDOM from 'react-dom';
import 'roboto-regular';
import App from './App';
import reportWebVitals from './reportWebVitals';



import './css/style-azalea.css';
// import './css/vendor.bundle.css';

import './css/index.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
