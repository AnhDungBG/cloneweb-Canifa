import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.scss";
import "./assets/app/globals.css";

import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Register from "./components/AuthForm/Register.tsx";
import Login from "./components/AuthForm/Login.tsx";
import ProductForm from "./components/ProductForm.tsx";
import ProductList from "./components/ProductList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "product",
        element: <ProductList />,
      },
      {
        path: "product/new",
        element: <ProductForm />,
      },
      {
        path: "product/edit/:id",
        element: <ProductForm />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
