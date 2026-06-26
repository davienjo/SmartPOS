import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

const [error, setError] = useState("");

const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleLogin = async (e) => {
    
    e.preventDefault();

    
    setLoading(true);

  
    setError("");

    try {
      
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData,
      );

      
      localStorage.setItem("token", res.data.token);

      
      localStorage.setItem("user", JSON.stringify(res.data.user));

      
      navigate("/dashboard");
    } catch (err) {
      
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      
      setLoading(false);
    }
  };

  return (
    
    <div className="login-page">
      
      <div className="login-card">
        
        <div className="login-logo">
          <h1>🛒</h1>
          <h2>SmartPOS</h2>
          <p>Sign in to your account</p>
        </div>

        
        {error && <div className="login-error">{error}</div>}

       
        <form onSubmit={handleLogin}>
          
          <div className="login-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Password field */}
          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

        
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
