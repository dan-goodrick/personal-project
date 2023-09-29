// import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userId);

  const handleLogout = () => {
    axios
      .delete("/api/logout")
      .then(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
      })
      .catch((err) => console.error("Logout Error", err));
  };

  // TODO Login/Letter SVG with dropdown to logout
  return (
    <div>
      <NavLink to="/">BoH</NavLink>
      <NavLink to="/fundraising">Current Fundraiser</NavLink>
      <NavLink to="/plannedBuilds">Upcoming Projects</NavLink>
      <NavLink to="/pastProjects">Previous Builds</NavLink>
      <NavLink to="/aboutUs">About Us</NavLink>
      {userId ? (
        <>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink>
            <button onClick={handleLogout}>Logout</button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Log in/Register</NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
