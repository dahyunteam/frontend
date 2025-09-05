import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="w-[1440px] h-[1024px] mx-auto bg-slate-50 text-slate-900 overflow-hidden relative">
      <Navbar />
      {/* 고정 헤더(56px) 만큼 아래로 내림 */}
      <main className="pt-14 w-full h-[calc(1024px-56px)] overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
