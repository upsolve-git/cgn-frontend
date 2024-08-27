import {
    createBrowserRouter,
    Navigate
  } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/auth/AuthLayout";
import AdminLayout from "../layouts/AdminLayout"

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import AdminHome from "../pages/admin/AdminHome";

const router = createBrowserRouter([
{
    path: "/",
    element: <DefaultLayout />,
    children: [
        {
            path: "",
            element: <LandingPage />,
        },
        {
            path:'auth',
            element: <AuthLayout />,
            children:[
                {
                    path: 'sign-in',
                    element: <SignInPage />
                },
                {
                    path: 'sign-up',
                    element: <SignUpPage />
                }
            ]
        },
        {
            path:'admin',
            element: <AdminLayout />,
            children:[
                {
                    path: '',
                    element: <Navigate to="add-product" replace />,  // Redirect to /admin/add-product
                },
                {
                    path:'add-product',
                    index: true,
                    element:<AdminHome />
                }
            ]
        }
    ],
},
]);

export default router
