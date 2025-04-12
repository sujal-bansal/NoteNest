import React, { useState } from "react";
import { useAuthStore } from "../store/AuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email : </label>
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
        Don't have an account?<Link to="/signup">Create Account</Link>{" "}
      </p>
    </div>
  );
}

export default LogInPage;
