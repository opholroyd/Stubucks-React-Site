import React, { Component } from 'react';
import ArrowDownGrn from '../../assets/icons/icon-angle-arrow-down-green.png';

export class PageThree extends Component {
  render() {
    return (
      <div className="section-three">
        <div className="nav-arrow">
          <button className="hidden"><img className="nav-image" src={ ArrowDownGrn } alt="Arrow Down"></img></button>
        </div>
        <div className="image-container">
          </div>
          
      </div>
    )
  }
}

export default PageThree
  