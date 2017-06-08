import React, { Component } from 'react';


const HEADERS = [
  {_id:1, name:'Team', short:'', background:'rgba(64, 67, 64, .6)', path:'/ockupy', identifier:'ockupy-header', icon:'fa fa-envelope-o'},
  {_id:2, name:'Portfolio', short:'', background:'rgba(5, 23, 243, 0.2)', path:'/portfolio', identifier:'portfolio-header', icon:'fa fa-briefcase'},
  {_id:3, name:'', short:'', background:'#0d150a', path:'/mission', identifier:'mission-header', img:'images/logo.png'},
]
class PageHeader extends Component{
  renderHeader(obj) {
      return (

          <div className="page-header-cs" style={{ background:obj.background }} key={obj._id} id={obj.identifier}>
            <div className="flex-item">
              <p className="title-square">
                {obj.short}
                <i className={obj.icon} aria-hidden="true" id={obj.identifier+"icon"}></i>
              </p>
              <img src={obj.img} className="img-responsive" />
            </div>
          </div>
      )
  }

  detectUrl() {
    let obj;
      let pathname = window.location.pathname
        if( pathname === '/ockupy' ) {
           obj = HEADERS.filter(function ( obj ) {
            return obj.name === 'Team';
          })[0];
          return this.renderHeader(obj);

        }else if ( pathname === '/portfolio' ) {
           obj = HEADERS.filter(function ( obj ) {
            return obj.name === 'Portfolio';
          })[0];
          return this.renderHeader(obj);
        }else if ( pathname === '/mission' ) {
          obj = HEADERS.filter(function ( obj ) {
           return obj.identifier === 'mission-header';
         })[0];
         return this.renderHeader(obj);
        }
  }

  componentDidMount() {
    this.detectUrl();
    particlesJS.load('particles-js', 'json/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
    setTimeout(function() {
      $("#head-vid").get(0).play();
      $('#particles-js').css({
        transform:'scale(1)',
        opacity:1
      });
    },300);
  }

  render() {
    return (
      <div className="page-header-wrapper">
          <video  className="bgvid"   muted loop id="head-vid">
            <source src="video/spaceA.mp4" type="video/mp4" />
          </video>
          <div id="particles-js"></div>
        {this.detectUrl()}
      </div>
    )
  }
}

export default PageHeader;
