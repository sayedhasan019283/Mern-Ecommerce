import {
    createBrowserRouter,
  } from "react-router-dom"
import App from "../App"
import About from "../componentes/About/About"
import Contact from "../componentes/Contact/Contact"
import Policy from "../componentes/Policy/Policy"
import PageNotFound from "../componentes/PageNotFound/PageNotFound"
import Category from "../componentes/category/Category"
import Register from "../componentes/Register/Register"
import Login from "../componentes/Login/Login"
import HomePage from "../componentes/HomePage/HomePage"
import Dashboard from "../componentes/Dashboard/Dashboard"
import PrivateRoute from "../componentes/PrivetRoute/PriverRoute"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/category",
          element: <Category/>
        },
        {
          path: "/home",
          element: <HomePage/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/policy",
          element: <Policy/>
        },
      ]
    },
    {
      path: "*",
      element: <PageNotFound/>
    },
    {
      path: "/dashboard",
      element:
      <PrivateRoute>
      <Dashboard/> 
      </PrivateRoute>,
    }


  ])

  export default router