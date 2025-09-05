// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profile from "../assets/profile.svg";
import Logo from "../assets/Logo.png";

const linkBase = "text-slate-500 hover:text-slate-900 transition";
const linkActive = "text-slate-900 font-medium";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // 로고 클릭 → 홈
  const handleLogoClick = () => {
    navigate("/home");
    setSidebarOpen(false);
  };

  // 내 프로필 클릭 → 항상 학생 마이페이지로
  const handleProfileClick = () => {
    navigate("/mypagestud"); // ✅ 고정
    setSidebarOpen(false);
  };

  // 표시용 데이터
  const nickname = localStorage.getItem("nickname") || "별명";
  const mentorCount = Number(localStorage.getItem("selectedMentorCount") || "0");

  // “선택한 멘토” 페이지 이동
  const goSelectedMentors = () => {
    navigate("/my-mentors");
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[1440px] z-50 border-b bg-white/80 backdrop-blur">
        <div className="px-4 md:px-6">
          <div className="flex h-14 items-center justify-between">
            <nav className="flex items-center gap-8 text-sm">
              <img
                src={Logo}
                alt="서비스 로고"
                className="w-[102px] h-[30px] object-contain select-none cursor-pointer"
                onClick={handleLogoClick}
              />
              <NavLink
                to="/home"
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
                end
              >
                홈
              </NavLink>
              <NavLink
                to="/mentor-list"
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
              >
                멘토 리스트
              </NavLink>
              <NavLink
                to="/chat"
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
              >
                채팅
              </NavLink>
            </nav>

            <div className="flex items-center gap-5 text-sm">
              <button
                onClick={handleProfileClick}
                className={linkBase}
                aria-label="내 프로필로 이동"
              >
                내 프로필
              </button>
              <button aria-label="menu" onClick={() => setSidebarOpen(true)}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 오른쪽 사이드바 */}
      <div
        className={`fixed top-14 bottom-0 right-0 w-[404px] bg-gray-100 shadow-lg z-50 rounded-bl-[24px] rounded-tl-[24px] transition-opacity duration-300 overflow-y-auto ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 닫기 */}
        <button
          className="absolute top-4 left-4 text-xl font-bold"
          onClick={() => setSidebarOpen(false)}
          aria-label="사이드바 닫기"
        >
          &gt;
        </button>

        {/* 프로필 */}
        <div className="flex flex-col items-center mt-16 space-y-3 px-6">
          <div className="flex items-center justify-center rounded-full bg-white w-32 h-32">
            <img src={profile} alt="프로필" className="w-24 h-24 object-cover rounded-full" />
          </div>
          <p className="font-semibold mt-2 text-lg">{nickname}</p>

          {/* 선택한 멘토 요약 (클릭 → /my-mentors) */}
          <button
            onClick={goSelectedMentors}
            className="w-full mt-12 flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium cursor-pointer"
          >
            <span>선택한 멘토</span>
            <span>{mentorCount}</span>
          </button>

          {/* 샘플 멘토 리스트 */}
          <div className="w-full mt-6 flex flex-col gap-0">
            {Array.from({ length: mentorCount || 4 }).map((_, i) => (
              <button
                key={i}
                onClick={goSelectedMentors}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm text-left cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 grid place-items-center text-blue-700">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                    <path d="M4 20a8 8 0 0 1 16 0" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm">멘토 {i + 1}</p>
                  <p className="text-xs text-slate-500 truncate">머머대학교 무슨무슨과</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
