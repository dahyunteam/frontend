import React from "react";
import profile from "../assets/profile.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LOGO_SRC = "/icon/메인로고.png";

const linkBase = "text-slate-500 hover:text-slate-900 transition";
const linkActive = "text-slate-900 font-medium";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // localStorage에서 회원 유형 가져오기
    const userType = localStorage.getItem("userType"); // "univ" 또는 "stud"

    if (userType === "univ") {
      navigate("/mypageuniv");
    } else if (userType === "stud") {
      navigate("/mypagestud");
    } else {
      navigate("/"); // 혹시 정보가 없으면 홈으로
    }
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[1440px] z-50 border-b bg-white/80 backdrop-blur">
      <div className="px-4 md:px-6">
        <div className="flex h-14 items-center justify-between">
          <nav className="flex items-center gap-8 text-sm">
            <img
              src={LOGO_SRC}
              alt="서비스 로고"
              className="w-8 h-8 object-contain select-none"
            />
            <span className="font-semibold">커비티아이</span>

            {/* 라우팅은 NavLink/Link + 절대경로 사용 */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
              end
            >
              홈
            </NavLink>

            <NavLink
              to="/mentor-list"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              멘토 리스트
            </NavLink>

            <NavLink
              to="/chat"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              채팅
            </NavLink>
          </nav>

          <div className="flex items-center gap-5 text-sm">
            <NavLink
              to="/me"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              내 프로필
            </NavLink>
            <button aria-label="menu">
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
  );
}
