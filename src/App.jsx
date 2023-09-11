import "./App.css";
import Header from "./Elements/Header";
import ErrorPage from "./Pages/ErrorPage.jsx";
import IndexPage from "./Pages/IndexPage.jsx";
import AllMoviesPage from "./Pages/AllMoviesPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import MovieDetailPage from "./Pages/MovieDetailPage.jsx";
import YourRatingsPage from "./Pages/YourRatingsPage.jsx";
import { Routes, Route } from "react-router-dom";
import axios from "axios";


function App() {
  const loader = async () => {
    const res = await axios.get("/api/movies");
    return { movies: res.data };
  }
  // errorElement doesn't seem to work
  return (
    <>
      <Header />
      <Routes>
      <Route index element={<IndexPage />} errorElement={<ErrorPage />}/>
      <Route path="/movies" element={<AllMoviesPage />} loader={loader} errorElement={<ErrorPage />}/>
      <Route path="/login" element={<LoginPage />} errorElement={<ErrorPage />}/>
      <Route
        path="/movies/:movieId"
        element={<MovieDetailPage />}
        loader={async ({ params }) => {
          const res = await axios.get(`/api/movies/${params.movieId}`);
          return { movies: res.data };
        }}
        errorElement={<ErrorPage />}
      />
      <Route
        path="me"
        element={<YourRatingsPage />}
        loader={async () => {
          const res = await axios.get("/api/ratings");
          console.log("loader", res.data);
          return { ratings: res.data };
        }}
        errorElement={<ErrorPage />}
      />
      </Routes>
    </>
  );
}

export default App;