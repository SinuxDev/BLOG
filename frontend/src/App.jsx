import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as postCreateAction } from "./components/PostForm";
import { action as postUpdateAction } from "./components/PostForm";
import { loader as postsLoader } from "./pages/Posts";
import { loader as detailsLoader } from "./pages/Details";
import { action as detailAction } from "./pages/Details";
import { action as authAction } from "./pages/Auth";
import { loader as LogoutLoader } from "./pages/Logout";
import { tokenLoader } from "./util/auth";
import Main from "./layout/Main";
import Posts from "./pages/Posts";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Auth from "./pages/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      id: "root",
      loader: tokenLoader,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },

        {
          path: "/create-post",
          element: <Create />,
          action: postCreateAction,
        },

        {
          path: "/auth",
          element: <Auth />,
          action: authAction,
        },

        {
          path: "/logout",
          loader: LogoutLoader,
        },

        {
          path: ":id",
          id: "post-detail",
          loader: detailsLoader,
          children: [
            {
              index: true,
              element: <Details />,
              action: detailAction,
            },

            {
              path: "edit-post",
              element: <Edit />,
              action: postUpdateAction,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
