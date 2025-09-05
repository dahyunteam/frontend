// src/pages/_AuthShell.jsx
import React from "react";

export default function AuthShell({ children }) {
  return (
    <div className="flex h-screen w-screen">
      {/* Left brand */}
      <div className="w-1/2 bg-[#F3F6FD] flex flex-col items-center justify-center">
        {/* 로고 이미지 */}
        <img
          src="/icon/logo.png" // 👉 public/icon/logo.png 파일 준비
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

      {/* Right content */}
      <div className="w-1/2 relative flex items-center justify-center bg-white">
        <div className="w-[640px]">{children}</div>
      </div>
    </div>
  );
}
