// router
import { createBrowserRouter, Navigate, Outlet } from "react-router";

// components
import Layout from "@/layout";
import Posts from "@/pages/posts";
import Users from "@/pages/users";
import ErrorPage from "@/pages/error";

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      { index: true, element: <Navigate replace to="/posts" /> },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
