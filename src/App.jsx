import "./App.css";
import Header from "./Elements/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


function App() {
  const userId = useSelector(state => state.userId)
  console.log("userId", userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate('/login');
    } else {
      navigate('/admin');
    }
}, [userId])
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
