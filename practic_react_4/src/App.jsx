import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import withAuth from "./hoc/withAuth";
import withLogger from "./hoc/withLogger";

const ProtectedProfile = withAuth(withLogger(Profile));

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProtectedProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}
