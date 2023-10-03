import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import { ProdutsProvider } from './contexts/ProductsContext'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Header } from './components/Header';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import { Success } from './pages/Success.tsx';

import { lightTheme } from './styles/theme.ts';
import { GlobalStyle } from './styles/global.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <Success />,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />

        <ProdutsProvider>
          <RouterProvider router={router} />
        </ProdutsProvider>
      </ThemeProvider>
  </React.StrictMode>,
)

