import React, { Component } from 'react';
import './offer-bar.css';
import logo from '../../assets/images/stubucks-logo.png'
import '../top-bar/offer-bar.css'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo"> <img className="logo-img" src= { logo }></img></div>
        <a href="#" className="links">Coffee</a>
        <a href="#" className="links">Tea</a>
        <a href="#" className="links">Menu</a>
        <a href="#" className="links">Rewards</a>
        <a href="#" className="links">Want to join our team?</a>
        <a href="#" className="links">Locations</a>
        <a href="#" className="links">Specials</a>
      </div>
    )
  }
}

export default Navbar

