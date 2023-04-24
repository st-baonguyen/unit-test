import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router';

import { initialState } from '@app/stores/users/reducer';
import AppSuspense from '@app/AppSuspense';
import { rootSagas } from '@app/stores';
import appReducer from '@app/stores/reducers';
import UserList from './UserList';
import UserDetail from './UserDetail';

const middleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(middleware));

const ReduxWrapper = ({ children }) => {
  middleware.run(rootSagas);
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Routes>
          <Route path="*" element={children} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockUseNavigate
}));

describe('With React Testing Library', () => {
  afterEach(() => {
    cleanup();
  });
  it('init app', () => {
    render(
      <Provider store={store}>
        <AppSuspense />
      </Provider>
    );
    expect(initialState.data).toBeNull();
  });
  describe('test render user list', () => {
    it('loading component', () => {
      render(<UserList />, { wrapper: ReduxWrapper });
      expect(screen.getByText('Loading ...')).toBeInTheDocument();
    });
    it('loading component success', async () => {
      render(<UserList />, { wrapper: ReduxWrapper });
      await waitFor(() =>
        expect(screen.getByText('User List')).toBeInTheDocument()
      );
    });
    it('render user detail', async () => {
      render(<UserList />, { wrapper: ReduxWrapper });
      await waitFor(() =>
        expect(screen.getByTestId('user-list-row')).toBeInTheDocument()
      );
    });
    it('render user detail', async () => {
      render(<UserList />, { wrapper: ReduxWrapper });
      await waitFor(() =>
        expect(screen.getByTestId('user-row')).toBeInTheDocument()
      );
    });
  });

  describe('user detail', () => {
    it('loading user detail', () => {
      render(<UserDetail />, { wrapper: ReduxWrapper });
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    it('loading user detail success', async () => {
      render(<UserDetail />, { wrapper: ReduxWrapper });
      await waitFor(() =>
        expect(screen.getByText('User name')).toBeInTheDocument()
      );
    });
  });
});
