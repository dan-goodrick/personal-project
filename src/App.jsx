import "./App.css";
import Header from "./Elements/Header";
import { Outlet } from "react-router-dom";

// errorElement={<ErrorPage />}
function App() {
  // errorElement doesn't seem to work
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
