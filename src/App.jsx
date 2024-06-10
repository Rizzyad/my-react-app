import React from "react";
import LoginPage from "./pages/login";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";

const App = () => {
    const router  = createBrowserRouter ([
      {
        path: "/",
        element: <h1>Hello World</h1>,
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      }
    ])
  return (
    <>  
        <RouterProvider router={router} />
    </>
  );
};

export default App;
