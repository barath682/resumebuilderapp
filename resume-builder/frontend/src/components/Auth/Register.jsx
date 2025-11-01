// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../../api";
// import { UserContext } from "../../App";

// const Register = () => {
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirm) {
//       setError("Passwords do not match");
//       return;
//     }
//     try {
//       const res = await registerUser({ email, password });
//       setUser(res.data.user);
//       navigate("/editor");
//     } catch {
//       setError("Registration failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Register</h2>
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
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirm}
//           required
//           onChange={(e) => setConfirm(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api";
import { UserContext } from "../../App";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await registerUser({ email, password });
      setUser(res.data.user);
      navigate("/editor");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-20 right-0 animate-pulse"></div>

      {/* Registration Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-10 w-[90%] max-w-md transition-transform duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-4">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Join us and start building your professional resume today.
        </p>

        {error && (
          <p className="text-red-600 mb-4 text-center font-semibold bg-red-50 p-2 rounded-lg border border-red-200">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-3/4 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-3/4 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-300"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            required
            onChange={(e) => setConfirm(e.target.value)}
            className="w-3/4 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-300"
          />

          <button
            type="submit"
            className="w-3/4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 hover:text-green-800 cursor-pointer font-semibold transition"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

