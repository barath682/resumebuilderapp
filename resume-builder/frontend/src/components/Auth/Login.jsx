// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../api";
// import { UserContext } from "../../App";

// const Login = () => {
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await loginUser({ email, password });
//       setUser(res.data.user);
//       navigate("/editor");
//     } catch {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Login</h2>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           required
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 relative overflow-hidden">
      {/* background blobs */}
      <div className="absolute w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-10 -left-10"></div>
      <div className="absolute w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 right-0"></div>

      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[90%] max-w-sm transition-transform duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-4">
          Login
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your credentials.
        </p>

        {error && (
          <div className="mb-4 text-red-600 text-center font-semibold bg-red-50 p-2 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5">
          <div className="w-3/4">
            <label className="block font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
            />
          </div>

          <div className="w-3/4">
            <label className="block font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-3/4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/Register")}
            className="text-green-600 hover:text-green-800 cursor-pointer font-semibold transition"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
