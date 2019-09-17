import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import RoutesApp from './router/client.routes';
import configureStore from './store/configureStore';
import Routes from './router/routes';

import './css/styles.scss';

const store = configureStore(window._INITIAL_DATA_);

hydrate(
	<Provider store={store}>
		{ RoutesApp(renderRoutes(Routes)) }
	</Provider>,
	document.getElementById('app')
);
