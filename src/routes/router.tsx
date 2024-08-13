import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/auth/AuthLayout";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";

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
    }
    ],
},
]);

export default router