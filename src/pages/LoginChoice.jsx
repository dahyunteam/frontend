import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginChoice() {
  const nav = useNavigate();

  return (
    <div className="flex h-screen w-screen">
      {/* 왼쪽: 로고 */}
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
      {/* 오른쪽: 카드 */}
      <div className="w-1/2 relative flex items-center justify-center">
        <div className="absolute top-10 right-12 flex gap-10 text-sm text-[#111827]">
          <button className="hover:opacity-70">문의하기</button>
          <button className="hover:opacity-70" onClick={() => nav("/signup")}>
            회원가입하기
          </button>
        </div>

        <div className="w-[520px]">
          <p className="text-center text-sm mb-6">어떤 방식으로 로그인하실래요?</p>
          <div className="flex gap-6">
            <button
              onClick={() => nav("/login/teacher")}
              className="flex-1 h-16 rounded-xl border border-[#D1D5DB] hover:bg-neutral-50"
            >
              선생님으로 로그인
            </button>
            <button
              onClick={() => nav("/login/student")}
              className="flex-1 h-16 rounded-xl bg-[#3152B7] text-white hover:bg-[#2643a0]"
            >
              학생으로 로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
