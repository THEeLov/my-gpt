import SigningLayout from "@/layouts/SigningLayout";
import SignIn from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SigningLayout,
    children: [
      {
        index: true,
        Component: SignIn
      }
    ]
  }
])