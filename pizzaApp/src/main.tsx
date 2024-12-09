import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/menu/menu'
import Cart from './pages/cart/cart'
import NotFound from './pages/not-found/not-found'
import Layout from './layout/menu/menu'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
          path: "/",
          element: <Menu/>
        },
        {
          path: "/cart",
          element: <Cart/>
        }
    ]
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
]) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={route}/>
  </StrictMode>,
)
