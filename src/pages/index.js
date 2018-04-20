import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Page from '../layouts/main';
import Home from '../components/home';

class HomePage extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js/contributors');
    const json = await res.json();
    return { users: json };
  };

  render() {
    return (
      <Page>
        <Home users={this.props.users}/>
      </Page>
    );
  }
}

export default HomePage;
