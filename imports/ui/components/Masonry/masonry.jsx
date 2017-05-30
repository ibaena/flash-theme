import React, { Component } from 'react';

class Masonry extends Component {
  render() {
    return(
      <div className="mason-wrapper">
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
        </div>
      </div>
    )
  }
}

export default Masonry;
