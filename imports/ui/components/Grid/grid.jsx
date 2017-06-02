import React, { Component } from 'react';

  const TEXT = 'Lucas ipsum dolor sit amet yoda windu';
  const TEXTB = 'Lando jar darth calrissian qui-gon';
  const TEXTC = 'Jawa thrawn dagobah tusken raider';
  const TEXTD = 'Solo secura kessel kashyyyk';
  const TEXTE = 'Moff skywalker organa maul droid';

class Grid extends Component {
  launchMission() {
    let trigger = false;
    $('.sm-square').on('click', function() {
      trigger = !trigger;

      if(trigger) {
        $('.sm-square').css({
          transition:'all .8s ease-in-out',
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 'auto',
          'z-index':99,
          margin:'0px 0px 0px 0px'
        });
        $('.sm-square-2').css({
          margin:'0px 0px 0px 0px'
        });
        $('#portfolio-header-icon').css({
          opacity:0,
          transition:'all .3s ease-in-out',
          visibility:'hidden'
        });
        $('.mission-text').css({
          visibility:'hidden',
          opacity:0,
          transition:'all .2s ease-in-out'
        });
        $('.flex-stack').css({
          transition:'all .8s ease-in-out',
          width:'100%',
          float:'right'
        });
        $('.grid-wrapper').css({
          transition:'all .8s ease-in-out',
          width:0,
          visibility:'hidden',
          opacity:0
        });
        $('.id-square').css({
          'width':'inherit',
          transition:'all .8s ease-in-out',
          'font-size': 'calc(20em + 8px)',
        })

        setTimeout(function() {
          window.location.href="/ockupy";
        },1000);

      }
    });
  }
  launchPortfolio() {
    let triggerPort = false;
    $('.sm-square-2').on('click', function() {
      triggerPort = !triggerPort;

      if(triggerPort) {
        $('.sm-square-2').css({
          transition:'all .8s ease-in-out',
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 'auto',
          'z-index':99,
          margin:'0px 0px 0px 0px'
        });
        $('.mission-text').css({
          visibility:'hidden',
          opacity:0,
          transition:'all .2s ease-in-out'
        });
        $('#ockupy-header-icon').css({
          opacity:0,
          transition:'all .3s ease-in-out',
          visibility:'hidden'
        });
        $('.flex-stack').css({
          transition:'all .8s ease-in-out',
          width:'100%',
          float:'right'
        });
        $('.grid-wrapper').css({
          transition:'all .8s ease-in-out',
          width:0,
          visibility:'hidden',
          opacity:0
        });
        $('.id-square').css({
          'font-size': 'calc(20em + 8px)',
          transition: 'all .8s ease-in-out',
        });
        setTimeout(function() {
          FlowRouter.go('/portfolio');
          FlowRouter.reload('/portfolio');
        },1000);

      }
    });
  }
  launchLarge() {
    let triggerLarge = false;
    $('.lg-square').on('click', function() {
      triggerLarge = !triggerLarge;

      if(triggerLarge) {
        $('.lg-square').css({
          transition:'all .8s ease-in-out',
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 'auto',
          'z-index':99,
          margin:'0px'
        });
        $('.flex-stack').css({
          transition:'all .8s ease-in-out',
          width:'0%',
          float:'right',
          visibility:'hidden'
        });
        $('.grid-wrapper').css({
          transition:'all .8s ease-in-out',
          width:'100%',
        });
        $('.id-square').css({
           transition:'all .6s ease-in-out',
           visibility:'hidden',
           opacity:0
        });
        setTimeout(function() {
          FlowRouter.go('/mission');
          FlowRouter.reload('/mission');
        },1000);

      }
    });
  }
  componentDidMount() {
    this.launchMission();
    this.launchPortfolio();
    this.launchLarge();
  }

  render() {
    return (
      <div>
      <div className="grid-wrapper col-lg-12 col-sm-12">
        <div className="lg-square square">
          <div className="flex-item">
            <img src="images/logo.png" className="img-responsive" />
          </div>
        </div>
      </div>
      <div className="flex-stack">
        <div className="sm-square square" id="square-1">
          <div  className="flex-item">
            <p className="id-square"><i className="fa fa-envelope-o" aria-hidden="true" id="ockupy-header-icon"></i></p>
          </div>
        </div>
        <div className="sm-square-2 square" id="square-2">
          <div className="flex-item">
            <p className="id-square"><i className="fa fa-briefcase" aria-hidden="true" id="portfolio-header-icon"></i></p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Grid;
