import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop.jsx";
import Home from "./Components/Layout/Home.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Inventory from "./Components/Inventory/Inventory.jsx";
import Login from "./Components/Login/Login.jsx";
import cartProductsLoader from "./CartProductsLoader/CartProductsLoader.js";
import Checkout from "./Components/Checkout/Checkout.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
