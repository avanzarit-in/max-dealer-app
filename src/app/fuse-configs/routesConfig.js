import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {WelcomeConfig} from 'app/main/welcome/WelcomeConfig';

const routeConfigs = [
    ExampleConfig,
    WelcomeConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    
    {
        path     : '/welcome',
        component: () => <Redirect to="/welcome"/>
    },
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    }
];

export default routes;
