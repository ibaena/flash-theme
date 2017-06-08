import React, { Component } from 'react';


import Footer from '../../ui/components/Footer/footer';
import PageHeader from '../../ui/components/PageHeader/pageHeader';
import PageIntro from '../../ui/components/PageIntro/pageIntro';
import Masonry from '../../ui/components/Masonry/masonry';
import Nav from '../../ui/components/Nav/nav';


// This component - represents a single page
export const Portfolio = () =>
<div>
  <div className="container-fluid flash-about flash-smooth" id="desktop-sites">
    <Nav />
    <PageHeader />
    <PageIntro />
    <Masonry />
    <Footer />
  </div>
</div>
