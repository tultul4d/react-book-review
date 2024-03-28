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
import ClassicBooks from './components/ClassicBooks/ClassicBooks';
import RomanceBooks from './components/RomanceBooks/RomanceBooks';
import Book from './components/Book/Book';
import Wishs from './components/Wishs/Wishs';


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
        element: <Books></Books>,
        loader: () => fetch('/bookCard.json'),
        children:[
          {
            index: true,
            element: <Book></Book>,
            loader: () => fetch('/bookCard.json')

          },
          {
            path:'wish',
            element: <Wishs></Wishs>,
            loader: () => fetch('/bookCard.json')
          }
        ]
      },
      
      {
        path: '/pages',
        element: <Pages></Pages>,
        loader: () => fetch('../bookCard.json')
      },
      {
        path: '/card/:bookId',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../bookCard.json')

      },
      {
        path: '/classic',
        element: <ClassicBooks></ClassicBooks>
      },
      {
        path: '/romance',
        element: <RomanceBooks></RomanceBooks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
