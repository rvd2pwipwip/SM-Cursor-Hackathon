import React from "react";
import Home from "./components/screens/Home";
import { useResponsiveLayout } from "./hooks/useResponsiveLayout";

function App() {
  const { sidebarWidth } = useResponsiveLayout();

  return (
    <div className="min-h-screen bg-white">
      {/* Main layout */}
      <div className="relative h-screen">
        {/* Sidebar - overlays content */}
        <div
          className="absolute left-0 top-0 h-full bg-gray-100 border-r border-gray-200 z-40"
          style={{ width: `${sidebarWidth}px` }}
        >
          <div className="p-3">
            <div className="text-gray-600 font-medium text-xs mb-3">Nav</div>
            {/* Sidebar content will go here */}
            <div className="space-y-1">
              <div className="text-gray-500 text-xs">Menu</div>
              <div className="text-gray-500 text-xs">items</div>
            </div>
          </div>
        </div>

        {/* Home screen content - full width but padded to account for sidebar */}
        <Home />
      </div>
    </div>
  );
}

export default App;
