import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import '@app/core/services/i18n.service';
import { RouterOutlet } from '@core/modules/custom-router-dom';
import { Footer, Header } from '@shared/components/layout/index';

import appRoutes from './pages/app.routes';
import AppSuspense from './AppSuspense';
import store from './stores/store';
import '../stylesheet/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppSuspense fallback={<></>}>
        <RouterOutlet routes={appRoutes} />
      </AppSuspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
