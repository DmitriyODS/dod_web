import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Registration = lazy(() => import('./pages/Registration/Registration'));
const ControlPanel = lazy(() => import('./pages/ControlPanel/ControlPanel'));
const Statistics = lazy(() => import('./pages/Statistics/Statistics'));

export const baseRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: 'registration/:type_mk',
        element: <Registration />,
      },
      {
        path: 'control_panel/:access_key',
        element: <ControlPanel />,
      },
      {
        path: 'statistics/:access_key',
        element: <Statistics />,
      },
    ],
  },
]);
