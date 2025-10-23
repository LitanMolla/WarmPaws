import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../layouts/Root/Root'
import NotFound from '../pages/NotFound/NotFound'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import MyProfile from '../pages/MyProfile/MyProfile'
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'

const AppRouter = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <NotFound/>,
        children:[
            {
                index: true,
                Component: Home,
                loader: ()=>fetch('/data.json')
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path:'register',
                Component: Register
            },
            {
                path:'services',
                Component: Services,
                loader: ()=>fetch('/data.json')
            },
            {
                path:'profile',
                element: <PrivateRoute><MyProfile/></PrivateRoute>
            },
            {
                path: 'service-details/:id',
                loader: ()=>fetch('/data.json'),
                element: <PrivateRoute><ServiceDetails/></PrivateRoute>
            },
            {
                path:'forgot-password',
                Component: ForgotPassword
            }

        ]
    }
])
export default AppRouter