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
import Order from "../componentes/Order/Order"
import ForgetPassword from "../componentes/ForgetPassword/ForgetPassword"
import OrderManagment from "../componentes/OrderManagment/OrderManagment"
import DashBoardPrivetRoute from "../componentes/DashBoardPrivetRoute/DashBoardPrivetRoute"
import AdminDashboard from "../componentes/AdminDashboard/AdminDashboard"
import CreateProductForm from "../componentes/CreateProductForm/CreateProductForm"

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
          path: "/forget-password",
          element: <ForgetPassword/>
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
      path: "/dashboard/admin",
      element:
      <DashBoardPrivetRoute>
      <AdminDashboard/> 
      </DashBoardPrivetRoute>,
      children: [
        {
          path:"/dashboard/admin/order",
          element: <OrderManagment/>
        },
        {
          path:"/dashboard/admin/add-product",
          element: <CreateProductForm/>
        },
      ]
    },
    {
      path: "/dashboard/user",
      element:
      <PrivateRoute>
      <Dashboard/> 
      </PrivateRoute>,
      children: [
        {
          path:"/dashboard/user/order",
          element: <Order/>
        },
      ]
    },
    {
      path: "*",
      element: <PageNotFound/>
    },
    


  ])

  export default router