import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

import LogoutButton from './LogoutButton.jsx';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault()
    axios.post('/api/logout').then((res) => {
      console.log("logout", res.data);
    if (res.data.success){
      navigate('/')
    }
  })
}
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">All movies</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/me">Your ratings</NavLink>
        <LogoutButton onLogout={handleLogout}/>
    </div>
  )
}

export default Header