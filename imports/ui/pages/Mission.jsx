import React, { Component } from 'react';


import Footer from '../../ui/components/Footer/footer';
import PageHeader from '../../ui/components/PageHeader/pageHeader';
import PageIntro from '../../ui/components/PageIntro/pageIntro';
import PageContent from '../../ui/components/PageContent/pageContent';




// This component - represents a single page
export const Mission = () =>
<div>
  <div className="container-fluid flash-about" id="desktop-sites">
    <PageHeader />
    <PageIntro />
    <PageContent />
    <Footer />
  </div>
</div>
