import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './Home/Home';
import Books from './components/Books/Books';
import Pages from './components/Pages/Pages';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CardDetails from './components/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/book',
        element: <Books></Books>
      },
      {
        path: '/pages',
        element: <Pages></Pages>
      },
      {
        path: '/card/:bookId',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../bookCard.json')

      },
      {
        path: '/'
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
