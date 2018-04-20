import React, { Component } from 'react';
import Link from 'next/link';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <img src='../../static/images/logo.svg' className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to React</h1>
        <ul className="app-nav">
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
