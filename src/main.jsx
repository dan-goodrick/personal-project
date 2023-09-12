import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<ErrorPage />}>
//       <Route index element={<IndexPage />} />
//       {/* Outlet Component */}
//       <Route
//         path="/movies"
//         element={<AllMoviesPage />}
//         loader={async () => {
//           const res = await axios.get("/api/movies");
//           return { movies: res.data };
//         }}
//       />
//       <Route path="/login" element={<LoginPage />} />
//       <Route
//         path="/movies/:movieId"
//         element={<MovieDetailPage />}
//         loader={async ({ params }) => {
//           const res = await axios.get(`/api/movies/${params.movieId}`);
//           return { movies: res.data };
//         }}
//       />
//       <Route
//         path="me"
//         element={<YourRatingsPage />}
//         loader={async () => {
//           const res = await axios.get("/api/ratings");
//           console.log("loader", res.data);
//           return { ratings: res.data };
//         }}
//       />
//     </Route>
//   )
// );