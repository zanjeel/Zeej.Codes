import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage"; // Import the new landing page
import HomePage from "./pages/HomePage";
import ComponentPage from "./pages/ComponentPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Navbar and Footer on all pages */}
        <Navbar />
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Other Pages */}
          <Route
            path="/*"
            element={
              <main className="flex-grow">
                <Routes>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/component/:id" element={<ComponentPage />} />
                  <Route path="/category/:id" element={<CategoryPage />} />
                </Routes>
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
