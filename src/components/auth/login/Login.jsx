import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  // Store email and password in a single state object
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", user);
      alert(`Welcome back, ${data.user.name}`);
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name); // Corrected the use of 'data' here
      setError("");
      navigate("/dashboard"); // Redirect to the dashboard after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  // Handle changes to the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="signup-box">
        <div className="image">
          <img
            src="https://miro.medium.com/v2/resize:fit:1280/0*nw1HVdtB47MKZx9Z.gif"
            alt="login"
          />
        </div>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className="email">
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="password">
              <label>Password</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="Submit">
              <button type="submit">
                <b>Login</b>
              </button>
            </div>
            <div className="link">
              <p>
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
