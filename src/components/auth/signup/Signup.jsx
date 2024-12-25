import { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  // Manage user state as an object
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input changes for the user object
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const HandleUser = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      alert(`User ${data.user.name} created successfully`);
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name); // Fixed typo here
      setSuccess(true);
      setError("");
      setUser({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form fields
      navigate("/"); // Redirect to the login page after signup
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <div className="image">
          <img
            src="https://i.pinimg.com/originals/2f/a1/cf/2fa1cf9c8435ecd55b9d3bf01b678816.gif"
            alt="signup"
          />
        </div>
        <div className="form-container">
          <h1>Signup</h1>
          <form onSubmit={HandleUser}>
            <div className="username">
              <label>Username</label>
              <br />
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
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
                value={user.password}
                onChange={handleChange}
                required
                id="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="confirm-password">
              <label>Confirm Password</label>
              <br />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                required
                id="confirmPassword"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label={
                  showConfirmPassword ? "Hide Confirm Password" : "Show Confirm Password"
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="Submit">
              <button type="submit">
                <b>Signup</b>
              </button>
            </div>
            <div className="link">
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>Signup Successful!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
