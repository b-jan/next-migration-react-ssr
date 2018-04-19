import React, { Component } from 'react';
import './about.css';

const isClientOrServer = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

class About extends Component {
  render() {
    return (
      <div>
        <h1>This is the About page!</h1>
        <p>This site is listing all Next.js contributors</p>
        <div className="about-main">
          <p>Is my application rendered by server or client?</p>
          <h2><code>{isClientOrServer()}</code></h2>
        </div>
      </div>
    );
  }
}

export default About;
