import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Homes/Home";
import Main from "./Layout/Main";
import Orderreview from "./Orderreview/Orderreview";
import Grandpa from "./Grandpa/Grandpa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('Tshirts.json')
      },
      {
        path: "review",
        element: <Orderreview></Orderreview>,
      },
      {
        path: "/grandpa",
        element: <Grandpa></Grandpa>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);