// import { useEffect } from "react"
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useEffect } from 'react';


const Header = () => {
  // const navigate = useNavigate();

  const dispatch = useDispatch()
  const userId = useSelector(state => state.userId)  
  console.log("User: ", userId);
  useEffect(() => {
    axios
        .get("/api/user")
        .then(res => {
          console.log("User: ", res);
          dispatch({ type: "LOGIN", payload: res.data.userId})
        })
        .catch(err => console.log(err))
}, [])

const handleLogout = () => {
  axios
      .delete("/api/logout")
      .then(res => dispatch({ type: "LOGOUT" }))
      .catch(err => console.log(err))
}

  return (
    <div>
        <NavLink to="/">BoH</NavLink>
        <NavLink to="/pastProjects">Previous Builds</NavLink>
        <NavLink to="/plannedBuilds">Upcoming Projects</NavLink>
        <NavLink to="/fundraising">Current Fundraiser</NavLink>
        {userId? 
        <>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink><button onClick={handleLogout}>Sign Out</button></NavLink>
        </>:
        <>
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/signUp">Volunteer Signup</NavLink>
        </>
        }
    </div>
  )
}

export default Header