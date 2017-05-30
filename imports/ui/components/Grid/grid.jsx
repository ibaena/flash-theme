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
          visibility:'hidden'
        });
        $('.id-square').css({
          'width':'inherit',
          transition:'all .8s ease-in-out',
          'font-size': 'calc(20em + 8px)',
        })
        setTimeout(function() {
          FlowRouter.go('/ockupy');
          FlowRouter.reload('/ockupy');
        },1000);


      }else {
        $('.sm-square').css({
          transition:'all .8s ease-in-out',
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          'z-index':0,
        });
        $('.mission-text').css({
          visibility:'visible',
          opacity:1,
          transition:'all .4s ease-in-out',
          'transition-delay':'.6s'
        });
        $('.flex-stack').css({
          transition:'all .8s ease-in-out',
          width:'35%',
        });
        $('.grid-wrapper').css({
          transition:'all .8s ease-in-out',
          width:'65%',
          display:'flex',
          visibility:'visible'
        });
        $('.id-square').css({
          'font-size': 'calc(5em + 8px)',
          transition: 'all .8s ease-in-out',
        });

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
          visibility:'hidden'
        });
        $('.id-square').css({
          'font-size': 'calc(10em + 8px)',
          transition: 'all .8s ease-in-out',
        });
        setTimeout(function() {
          FlowRouter.go('/portfolio');
          FlowRouter.reload('/portfolio');
        },1000);

      }else {
        $('.sm-square-2').css({
          transition:'all .8s ease-in-out',
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          'z-index':0,
        });
        $('.mission-text').css({
          visibility:'visible',
          opacity:1,
          transition:'all .4s ease-in-out',
          'transition-delay':'.6s'
        });
        $('.flex-stack').css({
          transition:'all .8s ease-in-out',
          width:'35%',
        });
        $('.grid-wrapper').css({
          transition:'all .8s ease-in-out',
          width:'65%',
          display:'flex',
          visibility:'visible'
        });
        $('.id-square').css({
          'font-size': 'calc(5em + 8px)',
          transition: 'all .8s ease-in-out',
        });
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

      }else {
        $('.lg-square').css({
          transition:'all .8s ease-in-out',
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          'z-index':0,
        });
        $('.flex-stack').css({
          transition:'all .8s ease-in-out',
          width:'35%',
          visibility:'visible'
        });
        $('.grid-wrapper').css({
          transition:'all .8s ease-in-out',
          width:'65%',
          display:'flex',
        });
        $('.id-square').css({
           transition:'all 1.4s ease-in-out',
           visibility:'visible',
           opacity:1,
           'transition-delay':'.4s'
        });
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
        <div className="lg-square">
          <img src="images/logo.png" className="img-responsive" />
        </div>
      </div>
      <div className="flex-stack">
        <div className="sm-square " id="square-1">
          <div  className="flex-item">
            <p className="id-square">OCKUPY</p>
          </div>
        </div>
        <div className="sm-square-2 " id="square-2">
          <div className="flex-item">
            <p className="id-square">Portfolio</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Grid;
