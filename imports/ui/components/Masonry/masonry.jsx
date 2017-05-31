import React, { Component } from 'react';

class Masonry extends Component {
  componentDidMount() {
    $(window).scroll( function(){
    $('.hideme-mason').each( function(i){

        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 1000;
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
  render() {
    return(
      <div className="hideme-mason">
      <div className="mason-wrapper ">
        <div id="masonry">
          <div className="flex-img-wrapper" style={{border:	'1px solid #404340'}}>
            <a href="http://www.banehauntedhouse.com" target="_blank" className="port-links">
              <img src="images/Logos/bane_logo.png" className="img-responsive"/>
            </a>
          </div>
          <div className="flex-img-wrapper" style={{background:	'#a562cf'}}>
            <a href="http://www.taphausjc.com/" target="_blank" className="port-links">
              <img src="images/Logos/taphaus_logo.png" className="img-responsive"/>
            </a>
          </div>
          <div className="flex-img-wrapper" style={{background:	'#e2ceed'}}>
            <a href="https://lavati.com/" target="_blank" className="port-links">
              <img src="images/Logos/lavati_logo_white.png" className="img-responsive"/>
            </a>
          </div>
          <div className="flex-img-wrapper" style={{background:	'#404340'}}>
            <a href="https://musikafrere.com/" target="_blank" className="port-links">
              <img src="images/Logos/musika_frere_logo.png" className="img-responsive"/>
            </a>
          </div>
          <div className="flex-img-wrapper" style={{border:	'1px solid #404340'}}>
            <a href="http://www.banehauntedhouse.com" target="_blank" className="port-links">
              <img src="images/Logos/bane_logo.png" className="img-responsive"/>
            </a>
          </div>
          <div className="flex-img-wrapper" style={{background:	'#a562cf'}}>
            <a href="http://www.taphausjc.com/" target="_blank" className="port-links">
              <img src="images/Logos/taphaus_logo.png" className="img-responsive"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Masonry;
