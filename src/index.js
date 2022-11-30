import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import 'antd/dist/reset.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './static/style/index.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);