import React, { Component } from 'react';
import './pages.css';

export class PageOne extends Component {
  render() {
    return (
      <div className="section-one">
        <div className="background">
        <div className="page-one-contents">
          <h1 className="tagline"><span className="green-span">Love</span> your Stu</h1>
          <p className="stu-range">Look at our range and choose the Stu that suits you.</p>
          <button className="choose-btn">Choose your coffee</button>
          </div>
          
        </div>
        <div className="footer">
            <h1>Try something <span className="green-span">new</span>?</h1>
        </div>
      </div>
    )
  }
}

export default PageOne
