import React, { Component } from 'react';


import Footer from '../../ui/components/Footer/footer';
import Grid from '../../ui/components/Grid/grid';



// This component - represents a single page
export const Home = () =>
<div>
  <div className="container-fluid flash-home" id="desktop-sites">
    <video  id="bgvid"  autoPlay muted loop>
      <source src="video/spaceA.mp4" type="video/mp4" />
    </video>

    <Grid />
  </div>
</div>
