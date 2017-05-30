import React, { Component } from 'react';

const CONTENT = [
  {_id:1, name:'Ockupy', background:'rgba(165, 98, 207, 0.2)', path:'/ockupy', identifier:'ockupy-content', content:'Entrepreneurship is the core characteristic of Ockupy’s team.', info:'Combining the skills and knowledge gained as past business owners, freelancers, and consultants, we were able to form an agency that offer unique insight, strategies, and execution that few firms can offer.'},
  {_id:2, name:'Portfolio', background:'#ffffff', path:'/portfolio', identifier:'portfolio-content', content:'We Work With Brands We Believe In.', info:''},
]
class PageContent extends Component {
  renderContent(obj) {
      return (
          <div className="page-content" style={{ background:obj.background }} key={obj._id} id={obj.identifier}>
            <div className="flex-item">
              <p className="title-square">{obj.info}</p>
            </div>
          </div>
      )
  }

  detectUrlContent() {
    let obj;
      let pathname = window.location.pathname
        if( pathname === '/ockupy' ) {
           obj = CONTENT.filter(function ( obj ) {
            return obj.name === 'Ockupy';
          })[0];
          return this.renderContent(obj);

        }else if ( pathname === '/portfolio' ) {
           obj = CONTENT.filter(function ( obj ) {
            return obj.name === 'Portfolio';
          })[0];
          return this.renderContent(obj);
        }else if ( pathname === '#three' ) {
        }
  }
  componentDidMount() {
    this.detectUrlContent();
  }

  render() {
    return (
      <div className="page-content-wrapper">{this.detectUrlContent()}</div>
    )
  }
}

export default PageContent;
