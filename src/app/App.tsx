import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import '@app/core/services/i18n.service';
import { RouterOutlet } from '@core/modules/custom-router-dom';
import { Footer, Header } from '@shared/components/layout/index';

import appRoutes from './app.routes';
import AppSuspense from './AppSuspense';
import store from './stores/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <AppSuspense fallback={<></>}>
        <Header />
      </AppSuspense>
      <Header /> */}
      <AppSuspense fallback={<></>}>
        <RouterOutlet routes={appRoutes} />
      </AppSuspense>
      {/* <Footer />
      <AppSuspense fallback={<></>}>
        <Footer />
      </AppSuspense> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
