import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
import { UserContext } from "../../App";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      setUser(res.data.user);
      navigate("/editor");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
