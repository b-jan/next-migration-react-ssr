import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to React</h1>
        <ul className="app-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
