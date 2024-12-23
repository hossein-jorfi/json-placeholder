import Posts from "@/pages/posts";
import { createBrowserRouter, Navigate, Outlet } from "react-router";

export const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      { index: true, element: <Navigate replace to="/posts" /> },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
]);
