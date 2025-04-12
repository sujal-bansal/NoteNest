import React, { useState } from "react";
import { useAuthStore } from "../store/AuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function SignupPage() {
  const { authUser, signup } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const validateForm = (data) => {
    if (!data.username.trim()) return toast.error("Username is required");
    if (!data.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!data.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm(formData);

    if (success === true) await signup(formData);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username :</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Email :</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Password :</label>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>
        Already have an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
