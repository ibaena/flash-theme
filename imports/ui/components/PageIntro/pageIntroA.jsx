import React, { Component } from 'react';

const INTROSA = [
  {_id:1, name:'Ockupy', background:'#ffffff', path:'/ockupy', identifier:'ockupy-intro', content:'Entrepreneurship is the core characteristic of Ockupy’s team.'},
  {_id:2, name:'Portfolio', background:'#ffffff', path:'/portfolio', identifier:'portfolio-intro', content:'We Work With Brands We Believe In.'},
  {_id:3, name:'Mission', background:'#ffffff', path:'/mission', identifier:'mission-intro', content:'We Are Dedicated To Content.'},
]

class PageIntroA extends Component {
  renderIntroTwo(objTwo) {
      return (
          <div className="page-intro" style={{ background:objTwo.background }} key={objTwo._id} id={objTwo.identifier}>
            <div className="flex-item">
              <p className="title-square">{objTwo.content}</p>
            </div>
          </div>
      )
  }

  detectUrlIntroTwo() {
    let objTwo;
      let pathname = window.location.pathname
        if( pathname === '/mission' ) {
           objTwo = INTROSA.filter(function ( objTwo ) {
            return objTwo.name === 'Ockupy';
          })[0];
          return this.renderIntroTwo(objTwo);
        }
  }
  componentDidMount() {
    this.detectUrlIntroTwo();
  }

  render() {
    return (
      <div>
        {this.detectUrlIntroTwo()}
      </div>
    )
  }
}

export default PageIntroA;
