import { useNavigate } from "react-router-dom";
import LoginForm from "../Elements/LoginForm.jsx";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (e, formData) => {
    e.preventDefault();
    const res = await axios.post("/api/auth", formData);
    const {success} = res.data
    console.log("Login: ",res.data);
    if (success) {
      navigate(`/admin`);
    } else {
      return <p>Try again</p>
    }

  };
 
  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
