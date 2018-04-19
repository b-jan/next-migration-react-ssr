import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './assets/style/index.css';
import Header from './components/header';
import registerServiceWorker from './utils/registerServiceWorker';

render(
  <Router>
    <div className="app">
      <Header/>
      <Routes/>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
