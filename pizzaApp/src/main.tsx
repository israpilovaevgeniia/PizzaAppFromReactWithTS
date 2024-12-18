import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/not-found/not-found'
import Layout from './layout/menu/layout'
import axios from "axios"
import { IProduct } from './interfaces/product.interface'
import { BASE_API_URL, TOKEN } from './helpers/api'
import AuthLayout from './layout/authLayout/authLayout'
import Login from './pages/login/login'
import Register from './pages/register/register'

const Menu = lazy(() => import("./pages/menu/menu"))
const Cart = lazy(() => import("./pages/cart/cart"))
const Product = lazy(() => import("./pages/product/product"))


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
        },
        {
          path: "/product/:id",
          element: <Product/>,
          errorElement: <h1>Error...</h1>,
          loader: async ({params}) => {
            const {id} = params;
            const {data} = await axios<IProduct>(`${BASE_API_URL}/products/${id}`, {
              headers: {
                "Authorization": `Bearer ${TOKEN}`
              }
            }) 
            return data;
          }
        }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
          {
            path: "login",
            element: <Login/>
          },
          {
            path: "register",
            element: <Register/>
          }
        ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
]) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h3>Загрузка компонента...</h3>}>
      <RouterProvider router={route}/>
    </Suspense>
  </StrictMode>,
)
