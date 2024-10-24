import MainLayout from "@/layouts/MainLayout";
import SigningLayout from "@/layouts/SigningLayout";
import Conversations from "@/pages/Conversations";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Conversations
      }
    ]
  },
  {
    path: "/signin",
    Component: SigningLayout,
    children: [
      {
        index: true,
        Component: SignIn
      }
    ]
  },
  {
    path: "/signup",
    Component: SigningLayout,
    children: [
      {
        index: true,
        Component: SignUp
      }
    ]
  }
])