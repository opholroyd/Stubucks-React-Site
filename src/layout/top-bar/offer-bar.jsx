import React, { Component } from 'react';
import './offer-bar.css';

export class OfferBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="offer">
          <p>Free shipping on orders of £30+ | Use Code STULOVE > offer details </p>
        </div>
        <div className="nearest-store">
          <p>Find nearest store</p>
        </div>
      </div>
    )
  }
}

export default OfferBar