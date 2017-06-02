import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

const INTROS = [
  {_id:1, name:'Ockupy', background:'#ffffff', path:'/ockupy', identifier:'ockupy-intro', content:'Ready to bring more value to your brand and your audience? Then let’s Talk.' },
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

  scrollBarInstance() {
    var scrollbar = Scrollbar.init(document.querySelector('.flash-about'),{
      'speed': '2.2',
      'overscrollEffect':'bounce',
      'damping':'.04'
  });
      scrollbar.addListener(function() {
        $('.hideme').each( function(i){
            var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 300;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).css({
                  opacity:1,
                  transition:'all .6s ease-in-out',
                  top:'0em'
                });
            }
          });
          $('.hideme-mason').each( function(i){
              var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 700;
              var bottom_of_window = $(window).scrollTop() + $(window).height();

              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){

                  $(this).css({
                    opacity:1,
                    transition:'all .6s ease-in-out',
                    top:'0em'
                  });
              }
            });
      });
}
  componentDidMount() {
    this.detectUrlIntro();
    this.scrollBarInstance();
  }

  render() {
    return (
      <div className="hideme">{this.detectUrlIntro()}</div>
    )
  }
}

export default PageIntro;
