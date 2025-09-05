// src/pages/_AuthShell.jsx
import React from "react";

export default function AuthShell({ children }) {
  return (
    <div className="flex h-screen w-screen">
      {/* Left brand */}
      <div className="w-1/2 bg-[#F3F6FD] flex items-center justify-center">
        <h1 className="text-6xl font-semibold tracking-tight">커비티아이</h1>
      </div>

      {/* Right content */}
      <div className="w-1/2 relative flex items-center justify-center bg-white">
        <div className="w-[640px]">{children}</div>
      </div>
    </div>
  );
}
