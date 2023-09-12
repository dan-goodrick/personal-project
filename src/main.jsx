import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import PastProjectsPage from "./Pages/PastProjects";
import ErrorPage from "./Pages/ErrorPage";
import AdminPage from "./Pages/AdminPage";
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
        element={<PastProjectsPage />}
        loader={async () => {
          const res = await axios.get(`/api/phase/3`);
          console.log("res.data", res.data);
          return { projects: res.data };
        }}
      />
      <Route
        path="/admin/"
        element={<AdminPage />}
        loader={async () => {
          const res = await axios.get(`/api/candidates/auth`);
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
