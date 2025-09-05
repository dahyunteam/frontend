import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSignupBase } from "../utils/signupStorage";

export default function SignupChoice() {
  const nav = useNavigate();
  const [userType, setUserType] = useState("menti"); // menti | mento
  const [name, setName] = useState("");
  const [account, setAccount] = useState(""); // email
  const [password, setPassword] = useState("");
  const [pw2, setPw2] = useState("");
  const canNext = name.trim() && account.trim() && password && pw2 && password === pw2;

  const goNext = (e) => {
    e.preventDefault();
    if (!canNext) return;
    saveSignupBase({ userType, name, account, password });
    if (userType === "menti") nav("/studentsignup");
    else nav("/teachersignup");
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
      <div className="w-1/2 flex items-center justify-center">
        <form className="w-[480px] space-y-4" onSubmit={goNext}>
          <h2 className="text-xl font-semibold mb-4">회원가입</h2>

          {/* 사용자 유형 */}
          <div className="flex gap-2">
            <button
              type="button"
              className={`flex-1 h-9 rounded border ${userType === "menti" ? "bg-[#3152B7] text-white" : "bg-white"}`}
              onClick={() => setUserType("menti")}
            >
              고등학생
            </button>
            <button
              type="button"
              className={`flex-1 h-9 rounded border ${userType === "mento" ? "bg-[#3152B7] text-white" : "bg-white"}`}
              onClick={() => setUserType("mento")}
            >
              대학생
            </button>
          </div>

          <input className="h-12 w-full rounded border px-4" placeholder="이름" value={name} onChange={(e)=>setName(e.target.value)} />
          <input className="h-12 w-full rounded border px-4" placeholder="이메일" value={account} onChange={(e)=>setAccount(e.target.value)} />
          <input className="h-12 w-full rounded border px-4" type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <input className="h-12 w-full rounded border px-4" type="password" placeholder="비밀번호 확인" value={pw2} onChange={(e)=>setPw2(e.target.value)} />

          <button
            type="submit"
            disabled={!canNext}
            className={`h-12 w-full rounded text-white ${canNext ? "bg-[#3152B7]" : "bg-[#E5E7EB] cursor-not-allowed"}`}
          >
            다음
          </button>
        </form>
      </div>
    </div>
  );
}
