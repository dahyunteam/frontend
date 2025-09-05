import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginTeacher() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = email.trim() && pw.trim();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ account: email, password: pw }),
      });

      if (!res.ok) {
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
        return;
      }

      const data = await res.json();
      // localStorage.setItem("token", data.token);
      nav("/teacher-home", { replace: true }); // 선생님 → TeacherHome
    } catch (err) {
      console.error(err);
      setError("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 bg-[#F3F6FD] flex flex-col items-center justify-center">
        {/* 로고 이미지 */}
        <img
          src="/icon/logo.png" // 👉 public 폴더 기준 경로. /public/icon/메인로고.png 넣어줘
          alt="서비스 로고"
          className="h-40 w-auto mb-6" // 크기 조절 (h-40은 높이 약 160px)
        />
        {/* 서비스 이름 */}
        <h1 className="text-3xl font-semibold tracking-tight">FOCAS</h1>
        <p className="mt-4 text-sm text-center text-gray-600 max-w-xs leading-6">
          흥미와 성향 기반으로 딱 맞는 진로를 추천받고,  
          대학생 멘토에게 바로 질문하며 미래를 준비할 수 있는 플랫폼
        </p>
      </div>
      <div className="w-1/2 relative flex flex-col items-center justify-center bg-white">
        <div className="absolute top-10 right-12 flex gap-10 text-sm text-[#111827]">
          <button className="hover:opacity-70">문의하기</button>
          <button onClick={() => nav("/signup")} className="hover:opacity-70">
            회원가입하기
          </button>
        </div>

        <p className="text-sm mb-8">
          <span className="text-[#0E2B8F] font-semibold">선생님</span>으로 로그인
        </p>

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
              onClick={() => setShow((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
            >
              {show ? "🙈" : "👁️"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={!canSubmit}
            className={`h-12 rounded-md text-sm font-medium transition ${
              canSubmit
                ? "bg-[#3152B7] text-white hover:bg-[#2643a0]"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }`}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
