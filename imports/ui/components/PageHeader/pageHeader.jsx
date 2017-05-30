import React, { Component } from 'react';

const HEADERS = [
  {_id:1, name:'Ockupy', background:'#404340', path:'/ockupy', identifier:'ockupy-header'},
  {_id:2, name:'Portfolio', background:'#e2ceed', path:'/portfolio', identifier:'portfolio-header'},
]
class PageHeader extends Component{

  renderHeader(obj) {
      return (

          <div className="page-header-cs" style={{ background:obj.background }} key={obj._id} id={obj.identifier}>
            <div className="flex-item">
              <p className="title-square">{obj.name}</p>
            </div>
          </div>
      )
  }

  detectUrl() {
    let obj;
      let pathname = window.location.pathname
        if( pathname === '/ockupy' ) {
           obj = HEADERS.filter(function ( obj ) {
            return obj.name === 'Ockupy';
          })[0];
          return this.renderHeader(obj);

        }else if ( pathname === '/portfolio' ) {
           obj = HEADERS.filter(function ( obj ) {
            return obj.name === 'Portfolio';
          })[0];
          return this.renderHeader(obj);
        }else if ( pathname === '#three' ) {
        }
  }
  componentDidMount() {
    this.detectUrl();
  }

  render() {
    return (
      <div className="page-header-wrapper">{this.detectUrl()}</div>
    )
  }
}

export default PageHeader;
