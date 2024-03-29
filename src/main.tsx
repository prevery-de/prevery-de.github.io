import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import Index from "./App.tsx";
import Imprint from "./Imprint.tsx";


const router = createHashRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/imprint',
        element: <Imprint />,
    }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
