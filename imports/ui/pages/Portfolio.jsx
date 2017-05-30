import React, { Component } from 'react';


import Footer from '../../ui/components/Footer/footer';
import PageHeader from '../../ui/components/PageHeader/pageHeader';
import PageIntro from '../../ui/components/PageIntro/pageIntro';
import Masonry from '../../ui/components/Masonry/masonry';



// This component - represents a single page
export const Portfolio = () =>
<div>
  <div className="container-fluid flash-about" id="desktop-sites">
    <PageHeader />
    <PageIntro />
    <Masonry />
    <Footer />
  </div>
</div>
