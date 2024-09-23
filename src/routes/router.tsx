import {
    createBrowserRouter,

  } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/auth/AuthLayout";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import AdminPage from "../pages/admin/AdminPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Cart from "../pages/CartPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import UserProfilePage from "../pages/user/UserProfilePage";
import AdminSignInPage from "../pages/auth/AdminSignInPage";

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
        path: "products",
        element: <ProductsPage />
    },
    {
        path: "productDetail/:id",
        element: <ProductDetailPage />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "orders",
        element: <OrderHistoryPage />
    },
    {
        path: "ordersuccess",
        element: <OrderSuccessPage />
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
            },
            {
                path: 'admin',
                element: <AdminSignInPage />
            }
        ]
    },
    {
        path: "admin-home",
        element: <AdminPage />
    },
    {
        path: "userprofile",
        element: <UserProfilePage />
    }
    ],
},
]);

export default router
