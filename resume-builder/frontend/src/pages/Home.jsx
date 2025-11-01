// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-r from-blue-200 to-indigo-300">
//       <h1 className="text-4xl font-bold">Online Resume Builder</h1>
//       <p className="max-w-lg text-center text-lg">Create, preview, and export your professional resume easily.</p>
//       <div className="flex gap-4">
//         <Link to="/login" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
//           Login   
//         </Link>
//         <Link to="/register" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">
//             Register
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-indigo-200 via-blue-100 to-blue-300 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-20 right-0 animate-pulse"></div>

      {/* Main Content */}
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 text-center max-w-xl w-full hover:scale-[1.02] transition-transform duration-300">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow-md">
          Online Resume Builder
        </h1>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
          Create, preview, and export your professional resume effortlessly — designed for modern professionals.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
          <Link
            to="/login"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
