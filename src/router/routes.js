import Layout from '../views/Layout/Layout';
import Views from '../views';
import React from 'react';

const routes = [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Views.Home
            },
        ]
    }
];

export default routes;
