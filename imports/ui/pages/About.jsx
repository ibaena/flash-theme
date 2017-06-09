import React, { Component } from 'react';


import Footer from '../../ui/components/Footer/footer';
import PageHeader from '../../ui/components/PageHeader/pageHeader';
import PageIntro from '../../ui/components/PageIntro/pageIntro';
import PageContent from '../../ui/components/PageContent/pageContent';
import ContactForm from '../../ui/components/Forms/form';
import Nav from '../../ui/components/Nav/nav';



// This component - represents a single page
export const About = () =>
<div>
  <Nav />
  <div className="container-fluid flash-about flash-smooth" id="desktop-sites">

    <PageHeader />
    <PageIntro />
    <ContactForm />
    <Footer />
  </div>
</div>
