import React, { Component } from 'react';


import Footer from '../../ui/components/Footer/footer';
import PageHeader from '../../ui/components/PageHeader/pageHeader';
import PageIntro from '../../ui/components/PageIntro/pageIntro';
import PageIntroA from '../../ui/components/PageIntro/pageIntroA';
import PageContent from '../../ui/components/PageContent/pageContent';
import PageContentA from '../../ui/components/PageContent/pageContentA';




// This component - represents a single page
export const Mission = () =>
<div>
  <div className="container-fluid flash-about" id="desktop-sites">
    <PageHeader />
    <PageIntro />
    <PageContent />
    <PageIntroA />
    <PageContentA />
    <Footer />
  </div>
</div>
