import React, { Component } from 'react';

const array = [
  {_id:1, name:'Ockupy', background:'#f5ea4e', path:'/ockupy'},
  {_id:2, name:'Portfolio', background:'#8a3038', path:'/portfolio'},
]
class PageHeader extends Component{

  renderHeader(obj) {
      return (
        <div key={obj._id}>
          <div className="page-intro" style={{ background:obj.background }}>
            <div className="flex-item">
              {obj.name}
            </div>
          </div>
        </div>
      )
  }

  detectUrl() {
    let obj;
      let pathname = window.location.pathname
        if( pathname === '/ockupy' ) {
           obj = array.filter(function ( obj ) {
            return obj.name === 'Ockupy';
          })[0];
          return this.renderHeader(obj);

        }else if ( pathname === '/portfolio' ) {
           obj = array.filter(function ( obj ) {
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
      <div>{this.detectUrl()}</div>
    )
  }
}

export default PageHeader;
