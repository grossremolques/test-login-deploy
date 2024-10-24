import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/Auth/AuthContext";
export default function Home() {
  const { userSession, getSession, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const cleanup = async() =>{await getSession()};
    if (!userSession) return navigate("/login");
    cleanup();
    
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  
  return (
    <div>
      <h1>Home</h1>
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}