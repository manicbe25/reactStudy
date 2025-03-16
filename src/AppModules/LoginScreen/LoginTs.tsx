import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginTs: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // ✅ Correctly placed inside the component

  const handleValidation = (): boolean => {
    if (!username.trim() || !password.trim()) {
      setError("Username and password should not be empty");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (handleValidation()) {
      navigate("/dashboard"); // ✅ Correctly navigates to Dashboard
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginTs;