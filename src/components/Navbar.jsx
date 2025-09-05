import profile from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
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

    <>
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
        {/* 닫기 버튼 */}
        <button
          className="absolute top-4 left-4 text-xl font-bold"
          onClick={() => setSidebarOpen(false)}
        >
          &gt;
        </button>

        {/* 프로필 */}
        <div className="flex flex-col items-center mt-16 space-y-3 px-6">
          <div className="flex items-center justify-center rounded-full bg-white w-32 h-32">
            <img
              src={profile}
              alt="프로필"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
          <p className="font-semibold mt-2 text-lg">별명 가나다</p>

          {/* 선택한 멘토 영역 */}
          <div className="w-full mt-12 flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium">
            <span>선택한 멘토</span>
            <span>4</span>
          </div>

          {/* 멘토 리스트 */}
          <div className="w-full mt-6 flex flex-col gap-0">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 grid place-items-center text-blue-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                    <path d="M4 20a8 8 0 0 1 16 0" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm">별명 가나다</p>
                  <p className="text-xs text-slate-500 truncate">
                    머머대학교 무슨무슨과
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}