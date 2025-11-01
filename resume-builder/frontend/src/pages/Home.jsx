import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-r from-blue-200 to-indigo-300">
      <h1 className="text-4xl font-bold">Online Resume Builder</h1>
      <p className="max-w-lg text-center text-lg">Create, preview, and export your professional resume easily.</p>
      <div className="flex gap-4">
        <Link to="/login" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
          Login   
        </Link>
        <Link to="/register" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">
            Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
