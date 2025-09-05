import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginTeacher() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);

  const canSubmit = email.trim() !== "" && pw.trim() !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: 실제 로그인 API 연동
    navigate("/teacher-home"); // 선생님은 여기로 이동
  };

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
          <button onClick={() => navigate("/signup")} className="hover:opacity-70">
            회원가입하기
          </button>
        </div>

        {/* Title */}
        <p className="text-sm mb-8">
          <span className="text-[#0E2B8F] font-semibold">선생님</span>으로 로그인
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="w-[480px] flex flex-col gap-4" autoComplete="off">
          <input
            type="email"
            placeholder="ID (Email)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            />
            <button
              type="button"
              aria-label="비밀번호 보기"
              onClick={() => setShow((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
            >
              {show ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className={`h-12 rounded-md text-sm font-medium transition
              ${canSubmit
                ? "bg-[#3152B7] text-white hover:bg-[#2643a0]"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"}`}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
