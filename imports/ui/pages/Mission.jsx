import React, { Component } from 'react';

import Footer from '../../ui/components/Footer/footer';
import PageHeader from '../../ui/components/PageHeader/pageHeader';
import PageIntro from '../../ui/components/PageIntro/pageIntro';
import PageIntroA from '../../ui/components/PageIntro/pageIntroA';
import PageContent from '../../ui/components/PageContent/pageContent';
import PageContentA from '../../ui/components/PageContent/pageContentA';
import Nav from '../../ui/components/Nav/nav';

// This component - represents a single page
export const Mission = () =>
<div>
  <Nav />
  <div className="container-fluid flash-about flash-smooth" id="smooth-mission">
    <PageHeader />
    <PageIntro />
    <PageContent />
    <PageIntroA />
    <PageContentA />
    <Footer />
  </div>
</div>
