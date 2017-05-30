import React, { Component } from 'react';

const INTROS = [
  {_id:1, name:'Ockupy', background:'#ffffff', path:'/ockupy', identifier:'ockupy-intro', content:'Entrepreneurship is the core characteristic of Ockupy’s team.'},
  {_id:2, name:'Portfolio', background:'#ffffff', path:'/portfolio', identifier:'portfolio-intro', content:'We Work With Brands We Believe In.'},
  {_id:3, name:'Mission', background:'#ffffff', path:'/mission', identifier:'mission-intro', content:'We Are Dedicated To Content.'},
]

class PageIntro extends Component {
  renderIntro(obj) {
      return (
          <div className="page-intro" style={{ background:obj.background }} key={obj._id} id={obj.identifier}>
            <div className="flex-item">
              <p className="title-square">{obj.content}</p>
            </div>
          </div>
      )
  }

  detectUrlIntro() {
    let obj;
      let pathname = window.location.pathname
        if( pathname === '/ockupy' ) {
           obj = INTROS.filter(function ( obj ) {
            return obj.name === 'Ockupy';
          })[0];
          return this.renderIntro(obj);

        }else if ( pathname === '/portfolio' ) {
           obj = INTROS.filter(function ( obj ) {
            return obj.name === 'Portfolio';
          })[0];
          return this.renderIntro(obj);
        }else if ( pathname === '/mission' ) {
          obj = INTROS.filter(function ( obj ) {
           return obj.name === 'Mission';
         })[0];
         return this.renderIntro(obj);
        }
  }
  componentDidMount() {
    this.detectUrlIntro();
  }

  render() {
    return (
      <div>{this.detectUrlIntro()}</div>
    )
  }
}

export default PageIntro;
