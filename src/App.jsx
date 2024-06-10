import React from "react";
import LoginPage from "./pages/login";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
import ProductPage from "./pages/products";

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
      },
      {
        path: "/products",
        element: <ProductPage />
      },
    ])
  return (
    <>  
        <RouterProvider router={router} />
    </>
  );
};

export default App;
