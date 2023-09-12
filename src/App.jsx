import "./App.css";
import Header from "./Elements/Header";
import ErrorPage from "./Pages/ErrorPage.jsx";
import IndexPage from "./Pages/IndexPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import PastProjects from "./Pages/PastProjects";

// errorElement={<ErrorPage />}
function App() {
  // errorElement doesn't seem to work
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/pastProjects/"
          element={<PastProjects />}
          loader={async () => {
            const res = await axios.get(`/api/phase/3`);
            console.log("res.data", res.data)
            return { projects: res.data };
          }}
        />
      </Routes>
    </>
  );
}

export default App;
