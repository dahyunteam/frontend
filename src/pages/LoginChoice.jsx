import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginChoice() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen">
      {/* Left */}
      <div className="w-1/2 bg-[#F3F6FD] flex items-center justify-center">
        <h1 className="text-6xl font-semibold tracking-tight">커비티아이</h1>
      </div>

      {/* Right */}
      <div className="w-1/2 relative flex flex-col items-center justify-center bg-white">
        {/* Top-right actions */}
        <div className="absolute top-10 right-12 flex gap-10 text-sm text-[#111827]">
          <button className="hover:opacity-70">문의하기</button>
          <button
            onClick={() => navigate("/signup")}
            className="hover:opacity-70"
          >
            회원가입하기
          </button>
        </div>

        {/* Title */}
        <p className="text-sm text-[#111827] mb-10">
          어떤 방식으로 로그인하시겠어요?
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-10">
          <button
            onClick={() => navigate("/login/teacher")}
            className="h-[92px] w-[300px] rounded-2xl bg-white border-2 border-[#3152B7] text-[#111827] shadow-[0_6px_0_#D8E0FF] hover:translate-y-[1px] active:translate-y-[2px] transition"
          >
            선생님으로 로그인
          </button>

          <button
            onClick={() => navigate("/login/student")}
            className="h-[92px] w-[300px] rounded-2xl bg-[#0E2B8F] text-white shadow-[0_6px_0_#B5C4FF] hover:translate-y-[1px] active:translate-y-[2px] transition"
          >
            학생으로 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
