import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"

import './index.css'
import router from './routes/router';

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='25620640731-gp8o0cgo157r8q4lthabhiuua2ou1hki.apps.googleusercontent.com'>
    <StrictMode>
      <RouterProvider
      router={router} />
    </StrictMode>
  </GoogleOAuthProvider>
)
