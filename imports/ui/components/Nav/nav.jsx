import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

class Nav extends Component {
  componentDidMount() {
    let showNav = false
    $('.navTrigger').click(function(){
      showNav = !showNav;
      $(this).toggleClass('active');

      if(showNav){
        $('.nav-wrapper').css({
          height:'100%',
          opacity:1
        });
        $('body').css({
          position:'fixed'
        });
        setTimeout(function() {
          TweenMax.staggerTo(".menu-list-item", .3, {opacity:1, top:0, ease: Quart.easeInOut}, 0.4);
        }, 300);
        setTimeout(function() {
          $('#copyright').css({
            transition:'all .3s ease-in-out',
            left:'1em',
            opacity:1
          });
        },800);

      }else {
        $('.nav-wrapper').css({
          height:'0%',
          opacity:1
        });
        $('body').css({
          position:'inherit'
        });
        TweenMax.staggerTo(".menu-list-item", .1, {opacity:0, top:'2em', ease: Quart.easeInOut}, 0.1);
        $('#copyright').css({
          transition:'all .3s ease-in-out',
          left:'-1em',
          opacity:0
        });
      }
    });
    let d = new Date();
    let currYear = d.getFullYear();
    $('#year').html(currYear);

    $('.menu-link').on('click', function() {
      let pageId = this.id;
      switch(pageId) {
        case 'page-1':
          window.location.href="/";
        break;
        case 'page-2':
          window.location.href="/mission";
        break;
        case 'page-3':
          window.location.href="/portfolio";
        break;
        case 'page-4':
          window.location.href="/ockupy";
        break;
      }
    })
  }
  menuItems() {
  return [
    {_id:1, name:'Home', src:'/', page_id:'page-1'},
    {_id:2, name:'Mission', src:'/mission', page_id:'page-2'},
    {_id:3, name:'Portfolio', src:'/portfolio', page_id:'page-3'},
    {_id:4, name:'Contact', src:'/ockupy', page_id:'page-4'},
  ]
}
renderMenu() {
  return this.menuItems().map((item) => (
    <li className='menu-list-item' key={item._id}>
      <a href="" className="menu-link" id={item.page_id}>{item.name}</a>
    </li>
  ))
}
  render() {
    return (
      <nav className="oc-nav">
        <div className="container-fluid">
          <div className="navTrigger">
            <i></i><i></i><i></i>
          </div>
          <div className="nav-wrapper">
            <div className="col-md-12 col-sm-12" id="flex-nav">
              <ul className="menu-list">
                {this.renderMenu()}
              </ul>
            </div>
            <div id="copyright">
              <p>© Copyright <span id="year"></span> Ockupy All Rights Reserved</p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
