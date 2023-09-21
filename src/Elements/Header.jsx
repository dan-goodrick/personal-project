import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'


const Header = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault()
    axios.post('/api/logout').then((res) => {
      // console.log("logout", res.data);
    if (res.data.success){
      navigate('/')
    }
  })
}
// TODO Login/Letter SVG with dropdown to logout so admin only shows when logged in and login only shows when logged out
  return (
    <div>
        <NavLink to="/">BoH</NavLink>
        <NavLink to="/pastProjects">Previous Builds</NavLink>
        <NavLink to="/plannedBuilds">Upcoming Projects</NavLink>
        <NavLink to="/fundraising">Current Fundraiser</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink>
        {/* <LogoutButton onLogout={handleLogout}/> */}
        </NavLink>
    </div>
  )
}

export default Header