import React, { Component } from 'react';

const CONTENTA = [
  {_id:1, name:'Ockupy', background:'rgba(5, 23, 243, 0.2)', path:'/ockupy', identifier:'ockupy-content', content:'Entrepreneurship is the core characteristic of Ockupy’s team.', info:'Combining the skills and knowledge gained as past business owners, freelancers, and consultants, we were able to form an agency that offer unique insight, strategies, and execution that few firms can offer.', signature:' - Ockupy Team'},
  {_id:2, name:'Portfolio', background:'#ffffff', path:'/portfolio', identifier:'portfolio-content', content:'We Work With Brands We Believe In.', info:''},
  {_id:3, name:'Mission', background:'rgba(165, 98, 207, 0.2)', path:'/mission', identifier:'mission-content', content:'', info:'The mantra “Content is King” may be over-used but never overstated. We help brands create and distribute creative, high quality content that resonates with their audience and brings to life their brand story. Our capabilities span from media creation, web and app development, ad publishing, performance analytics, start-up incubation, and everything in between.'},
]
class PageContentA extends Component {
  renderContentTwo(objTwo) {
      return (
          <div className="page-content" style={{ background:objTwo.background }} key={objTwo._id} id={objTwo.identifier}>
            <div className="flex-item">
              <p className="title-square">{objTwo.info}</p>
              <p className="signature">{objTwo.signature}</p>
            </div>
          </div>
      )
  }

  detectUrlContentTwo() {
    let objTwo;
      let pathname = window.location.pathname
        if( pathname === '/mission' ) {
           objTwo = CONTENTA.filter(function ( objTwo ) {
            return objTwo.name === 'Ockupy';
          })[0];
          return this.renderContentTwo(objTwo);
        }
  }
  componentDidMount() {
    this.detectUrlContentTwo();
  }

  render() {
    return (
      <div className="page-content-wrapper hideme">{this.detectUrlContentTwo()}</div>
    )
  }
}

export default PageContentA;
