import React from 'react';
import { Router, Link } from 'react-static';
import Routes from 'react-static-routes';
import { Provider } from 'react-redux';

import createStore from './store';
import { fetchImages } from './actions';

import './app.css';

const store = createStore();

store.dispatch(fetchImages);

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  </Provider>
);
