import Welcome from './Welcome';

export const WelcomeConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/welcome',
            component: Welcome
        }
    ]
};

/**
 * Lazy load Welcome
 */
/*
import React from 'react';

export const WelcomeConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/welcome',
            component: React.lazy(() => import('./Welcome'))
        }
    ]
};
*/
