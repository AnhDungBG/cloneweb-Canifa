import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fortawesome/fontawesome-free/css/all.css";
import "./../app/globals.css";
import "./index.scss";

// import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
