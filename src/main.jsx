import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import PastProjects from "./Pages/PastProjects";
import ErrorPage from "./Pages/ErrorPage";
import App from "./App";
import axios from "axios";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/pastProjects/"
        element={<PastProjects />}
        loader={async () => {
          const res = await axios.get(`/api/phase/3`);
          console.log("res.data", res.data);
          return { projects: res.data };
        }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
