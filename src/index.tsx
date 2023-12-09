import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './themes/theme.scss';
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import Fallback from './components/Fallback/Fallback';
import { RouterProvider } from 'react-router-dom';
import { baseRouter } from './router';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={baseRouter} />
      <ToastContainer autoClose={4000} limit={1} />
    </Suspense>
  </React.StrictMode>,
);
