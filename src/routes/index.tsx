// router
import { createBrowserRouter, Navigate, Outlet } from "react-router";

// components
import Layout from "@/layout";
import Posts from "@/pages/posts";
import Users from "@/pages/users";
import ErrorPage from "@/pages/error";
import Post from "@/pages/post";
import User from "@/pages/user";

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
        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: "detail/:postId",
            element: <Post />,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: "detail/:userId",
            element: <User />,
          },
        ],
      },
    ],
  },
]);
