import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";
import Login from "@/pages/auth/login";
import Profile from "@/pages/users/profile";
import EditProfile from "@/pages/users/edit-profile";
import BookDetail from "@/pages/books/detail";
import NotFound from "@/pages/not-found";
import ProtectedRoute from "./protected-route";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Login />, // TODO: Change to register page
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/edit",
          element: <EditProfile />,
        },
        {
          path: "/books",
          element: <Homepage />,
        },
        {
          path: "/books/:id_book",
          element: <BookDetail />,
        },
        {
          path: "/history-borrow",
          element: <BookDetail />, // TODO: Change to history borrow
        },
        {
          path: "/dashboard",
          element: <BookDetail />, // TODO: Change to admin dashboard
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
