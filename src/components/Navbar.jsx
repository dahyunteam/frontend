import React from "react";

const LOGO_SRC = "/icon/메인로고.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-1/2  -translate-x-1/2 w-[1440px] z-50 border-b bg-white/80 backdrop-blur">
      <div className="px-4 md:px-6">
        <div className="flex h-14 items-center justify-between">
          <nav className="flex items-center gap-8 text-sm">
            <img
              src={LOGO_SRC}
              alt="서비스 로고"
              className="w-8 h-8 object-contain select-none"
            />
            <span className="font-semibold">커비티아이</span>
            <a className="text-slate-500 hover:text-slate-900" href="#">홈</a>
            <a className="text-slate-500 hover:text-slate-900" href="#">멘토 리스트</a>
            <a className="text-slate-500 hover:text-slate-900" href="#">채팅</a>
          </nav>
          <div className="flex items-center gap-5 text-sm">
            <a className="text-slate-500 hover:text-slate-900" href="#">내 프로필</a>
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
