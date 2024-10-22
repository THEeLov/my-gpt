import SigningLayout from "@/layouts/SigningLayout";
import SignIn from "@/pages/SignIn";
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SigningLayout,
    children: [
      {
        path: "/",
        element: React.createElement(Navigate, {
          to: "/signin",
          replace: true,
        }),
      },
      {
        path:"/signin",
        index: true,
        Component: SignIn
      }
    ]
  }
])