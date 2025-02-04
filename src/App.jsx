import { useState } from 'react'
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App
