import React from 'react';
import Header from '../components/header'
import '../static/style/index.css'

export default ({ children }) => (
  <div className="app">
    <Header />
    { children }
  </div>
)
