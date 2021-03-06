import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

import Routes from './routes/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-drawer/assets/index.css';
import './assets/styles/customStyles.scss';
import './assets/styles/utilityStyles.scss';
import './assets/styles/tailwind.css';
import './i18n';

ReactDOM.render(
  <div>
    <Router>
      <Routes />
    </Router>
    <ToastContainer />
  </div>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
