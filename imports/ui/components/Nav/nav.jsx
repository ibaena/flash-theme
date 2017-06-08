import React, { Component } from 'react';

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
        })
      }else {
        $('.nav-wrapper').css({
          height:'0%',
          opacity:1
        });
        $('body').css({
          position:'inherit'
        })
      }
    });
    let d = new Date();
    let currYear = d.getFullYear();
    $('#year').html(currYear);
  }
  menuItems() {
  return [
    {_id:1, name:'Home', src:'/'},
    {_id:2, name:'Mission', src:'/mission'},
    {_id:3, name:'Portfolio', src:'/portfolio'},
    {_id:4, name:'Contact', src:'/ockupy'},
  ]
}
renderMenu() {
  return this.menuItems().map((item) => (
    <li className='menu-list-item' key={item._id}>
      <a href={item.src} className="menu-link">{item.name}</a>
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
            <div className="col-md-12 col-sm-12">
              <ul className="menu-list">
                {this.renderMenu()}
              </ul>
            </div>
            <div id="copyright">
              <p>© Copyright <span id="year"></span> Justin C Schilling. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
