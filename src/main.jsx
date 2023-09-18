import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PastProjects from "./Pages/PastProjs";
import ErrorPage from "./Pages/Error";
import Admin from "./Pages/Admin";
import Fundraising from "./Pages/Fundraising";
import App from "./App";
import axios from "axios";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PlannedProjects from "./Pages/Planning";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} 
                loader={async () => {
          const res = await axios.get(`/api/phase/3`);
          console.log("res.data", res.data);
          return { projects: res.data };
        }}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/pastProjects/"
        element={<PastProjects />}
        loader={async () => {
          const res = await axios.get(`/api/phase/5`);
          console.log("res.data", res.data);
          return { projects: res.data };
        }}
      />
      <Route
        path="/plannedBuilds/"
        element={<PlannedProjects />}
        loader={async () => {
          const res = await axios.get(`/api/phase/4`);
          console.log("res.data", res.data);
          return { planned: res.data };
        }}
      />
      <Route
        path="/fundraising/"
        element={<Fundraising />}
        loader={async () => {
          const res = await axios.get(`/api/phase/3`);
          console.log("res.data", res.data);
          return { fundraising: res.data };
        }}
      />
      {/* <Route
        path="/addRecord/"
        element={<NewRecord />}
        loader={async () => {
          const res = await axios.get(`/api/candidate/auth/`);
          console.log("res.data", res.data);
          return { newRecord: res.data };
        }}
      /> */}
      <Route
        path="/admin/"
        element={<Admin />}
        loader={async () => {
          const res = await axios.get(`/api/candidates/auth`);
          console.log("res.data", res.data);
          return { candidates: res.data };
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
