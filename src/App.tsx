import React from "react";
import Home from "./components/screens/Home";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main layout */}
      <div className="flex">
        {/* Sidebar placeholder - will be moved to its own component later */}
        <div className="w-sidebar bg-gray-100">
          {/* Sidebar content will go here */}
        </div>

        {/* Home screen content */}
        <Home />
      </div>
    </div>
  );
}

export default App;
