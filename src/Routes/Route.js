import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
        path:"/signup",
        element:(
            <Signup/>
        )

    }
  ])