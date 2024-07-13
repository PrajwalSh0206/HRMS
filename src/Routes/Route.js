import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";

//page imports
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Landingpage from "../pages/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import CompanyDetails from "../pages/company/CompanyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/companydetails",
    element: <CompanyDetails />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
