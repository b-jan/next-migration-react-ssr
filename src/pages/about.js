import React, { Component } from 'react';
import Page from '../layouts/main'
import About from '../components/about';

class AboutPage extends Component {
  render() {
    return (
      <Page>
        <About/>
      </Page>
    );
  }
}

export default AboutPage;
