import "./App.css";
import { useSelector } from "react-redux"
import axios from "axios";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PlannedProjects from "./Pages/PlannedProjects";
import NewRecord from "./Pages/NewRecord";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PastProjects from "./Pages/PastProjects";
import ErrorPage from "./Pages/Error";
import Admin from "./Pages/Admin";
import Fundraising from "./Pages/Fundraising";
import Layout from "./Elements/Layout";
import SignUp from "./Pages/SignUp";

function App() {
  const userId = useSelector(state => state.userId)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route
          index
          element={<Home />}
          loader={async () => {
            const res = await axios.get(`/api/phase/3`);
            // console.log("res.data", res.data);
            return { projects: res.data };
          }}
        />
        <Route path="/login" element={userId? <Navigate to='/admin'/> : <Login />} />
        <Route
          path="/pastProjects/"
          element={<PastProjects />}
          loader={async () => {
            const res = await axios.get(`/api/phase/5`);
            // console.log("res.data", res.data);
            return { projects: res.data };
          }}
        />
        <Route
          path="/plannedBuilds/"
          element={<PlannedProjects />}
          loader={async () => {
            const res = await axios.get(`/api/phase/4`);
            // console.log("res.data", res.data);
            return { planned: res.data };
          }}
        />
        <Route
          path="/fundraising/"
          element={<Fundraising />}
          loader={async () => {
            const res = await axios.get(`/api/phase/3`);
            // console.log("res.data", res.data);
            return { fundraising: res.data };
          }}
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/newRecord/" element={userId? <NewRecord /> : <Navigate to='/login'/>} />  
        <Route
          path="/admin/"
          element={userId? <Admin /> : <Navigate to='/login'/>}
          loader={async () => {
            const res = await axios.get(`/api/candidates`);
            return { candidates: res.data };
          }}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;
