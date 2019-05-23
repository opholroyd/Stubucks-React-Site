import React, { Component } from 'react';
import './App.css';
import OfferBar from './layout/top-bar/offer-bar';
import Navbar from './layout/top-bar/nav-bar';
import PageOne from './layout/pages/page-one';
import PageTwo from './layout/pages/page-two';
import PageThree from './layout/pages/page-three';
import PageFour from './layout/pages/page-four';

export class App extends Component {
  render () {
      return (
    <div className ="App">
      <OfferBar />
      <Navbar />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </div>
    )
  }
}

export default App;