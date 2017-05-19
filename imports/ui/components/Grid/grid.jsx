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
          transition:'all 1.4s ease-in-out'
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
          transition:'all 1.4s ease-in-out'
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
          transition:'all .8s ease-in-out'
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
      }
    });
  }
  componentDidMount() {
    this.launchMission();
    this.launchPortfolio();

  }

  render() {
    return (
      <div>
      <div className="grid-wrapper col-lg-12 col-sm-12">
        <div className="lg-square">
          <div className="flex-item mission-text"><p>{TEXT}</p></div>
          <div className="flex-item mission-text"><p>{TEXTB}</p></div>
          <div className="flex-item mission-text"><p>{TEXTC}</p></div>
          <div className="flex-item mission-text"><p>{TEXTD}</p></div>
          <div className="flex-item mission-text"><p>{TEXTE}</p></div>
        </div>
      </div>
      <div className="flex-stack">
        <div className="sm-square">
          <p>O</p>
        </div>
        <div className="sm-square-2">
          <div className="flex-item">
            <p>Portfolio</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Grid;
