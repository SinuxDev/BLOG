import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from "./layout/Main";
import Posts from "./pages/Posts";
import Create, { action as postCreateAction } from "./pages/Create";
import { loader as postsLoader } from "./pages/Posts";
import Details from "./pages/Details";
import { loader as detailsLoader } from "./pages/Details";
import Edit from "./pages/Edit";
import { action as detailAction } from "./pages/Details";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index:true, 
          element: <Posts/>,
          loader: postsLoader
        },

        {
          path:"/create-post", 
          element: <Create/>, 
          action: postCreateAction
        },

        {
          path:":id",
          id: "post-detail",
          loader: detailsLoader,
          children:[
              {
                index: true,
                element: <Details />, 
                action: detailAction,
              },
      
              {
                path:"edit-post",
                element: <Edit />,
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
