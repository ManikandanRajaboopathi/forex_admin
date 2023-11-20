import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Register from './components/Register'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Users from './pages/users'
import PrivacyPolicy from './pages/privacy_policy'
import 'react-toastify/dist/ReactToastify.css';
// import './assets/animate.min.css'


function App() {
  return (

    <RouterProvider router={ createBrowserRouter([
      {
        path: "/",
        Component: Login,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/users",
        Component: Users,
      },
      {
        path: "/privacy_policy",
        Component: PrivacyPolicy,
      },
    ])} />
  );
}

export default App;
