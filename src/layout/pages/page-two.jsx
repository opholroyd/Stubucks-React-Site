import React, { Component } from 'react'
import ArrowDown from '../../assets/icons/icon-angle-arrow-down-white.png';
import DrinkImage from '../../assets/images/StubrewIcedCoffee.png';

export class PageTwo extends Component {
  render() {
    return (
      <div className="section-two">
      <div className="p2-contents">
        <div className="nav-arrow">
          <button className="hidden"><img className="nav-image" src={ ArrowDown } alt="Arrow-Down" onClick={this.arrowFunction}></img></button>
        </div>
        <div className="drink-image-container">
          <img className="drink-image" src={ DrinkImage } alt="Iced Stu"></img>
        </div>
        <div className="text">
          <h1>The New Stubrew</h1>
          <p>A delicious new nitro brew developed carefully on the darkside of the moon, instilled with the freshness of Stu himself.</p>
        </div>
        <div className="footer-2">
            <h1><span>The Stu</span> Stop</h1>
        </div>
      </div>
      </div>
    )
  }
}

export default PageTwo
