import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

//Layouts and Pages
import { App } from '../../ui/layouts/App.jsx'
import { Home } from '../../ui/pages/Home.jsx'
import { About } from '../../ui/pages/About.jsx'
import { Portfolio } from '../../ui/pages/Portfolio.jsx'
import { Mission } from '../../ui/pages/Mission.jsx'


FlowRouter.route('/', {
    action() {
        mount(App, {
            content: <Home />
        });
    }
});
FlowRouter.route('/ockupy', {
    action() {
        mount(App, {
            content: <About />
        });
    }
});
FlowRouter.route('/portfolio', {
    action() {
        mount(App, {
            content: <Portfolio />
        });
    }
});
FlowRouter.route('/mission', {
    action() {
        mount(App, {
            content: <Mission />
        });
    }
});
