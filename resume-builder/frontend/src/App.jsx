import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import PublicResume from "./pages/PublicResume";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editor" element={user ? <Editor /> : <Navigate to="/login" />} />
          <Route path="/resume/:id" element={<PublicResume />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
