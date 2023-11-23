import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Register from './components/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/users'
import 'react-toastify/dist/ReactToastify.css'
import Faq from './cms/Faq'
import FaqAdd from './cms/Faqadd'
import PrivacyPolicy from './cms/PrivacyPolicy'
import TermsCondition from './cms/terms_condition'
import Profile from './pages/Profile'
// import './assets/animate.min.css'

function App () {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          Component: Login
        },
        {
          path: '/dashboard',
          Component: Dashboard
        },
        {
          path: '/users',
          Component: Users
        },
        {
          path: '/faq',
          Component: Faq
        },
        {
          path: '/faqadd',
          Component: FaqAdd
        },
        {
          path:'/privacy_policy',
          Component:PrivacyPolicy
        },
        {
          path:'/terms_condition',
          Component:TermsCondition
        },
        {
          path: '/profile',
          Component: Profile
        }
      ])}
    />
  )
}

export default App
