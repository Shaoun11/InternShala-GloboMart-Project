import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/login/Login.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import Register from './Components/Register/Register.jsx'
import Error404 from './Components/Error.jsx'
import About from './About/About.jsx'
import NavContact from './Contact/NavContact.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MyCart from './Components/my Cart/MyCart.jsx'
import PrivateRoute from './PrivateRoute.jsx'


const route=createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  errorElement:<Error404></Error404>,
  children:[{
    path:"/",
    element:<PrivateRoute><Home></Home></PrivateRoute>,
    loader:()=>fetch("https://dummyjson.com/products")
  },
   {
    path:"/login",
    element:<Login></Login>
   },
   {
    path:"/register",
    element:<Register></Register>
   },
   {
    path:"/about",
    element:<PrivateRoute><About></About></PrivateRoute>
   },
   {
    path:"/contact",
    element:<PrivateRoute><NavContact></NavContact></PrivateRoute>
   },
   {
    path:"/mycart",
    element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
   }
]
}])

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
<QueryClientProvider client={queryClient}>
<React.StrictMode>
   <RouterProvider router={route} > </RouterProvider>
  </React.StrictMode>,
</QueryClientProvider>
</AuthProvider>
)
