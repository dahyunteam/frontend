// src/pages/SignupPage.jsx  (혹은 SignupChoice.jsx와 하나만 쓰면 됨)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "./_AuthShell";
import { saveSignupBase } from "../utils/signupStorage";

export default function SignupPage() {
  const nav = useNavigate();

  // 사용자 구분: menti(고등학생) | mento(대학생)
  const [userType, setUserType] = useState("menti");
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");   // ✅ email 대신 account로 통일
  const [password, setPassword] = useState("");
  const [pw2, setPw2] = useState("");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const isAccountFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(account);
  const canNext =
    name.trim() &&
    account.trim() &&
    isAccountFormatValid &&
    password &&
    pw2 &&
    password === pw2;

  const goNext = (e) => {
    e.preventDefault();
    if (!canNext) return;

    // 다음 스텝에서 사용할 기본 정보 저장
    saveSignupBase({
      userType,                        // "menti" | "mento"
      name: name.trim(),
      account: account.trim(),
      password,
    });

    // 타입에 따라 다음 페이지로 이동
    if (userType === "menti") nav("/studentsignup");
    else nav("/teachersignup");
  };

  return (
    <AuthShell>
      <h2 className="text-[22px] font-semibold mb-8">회원가입</h2>

      {/* 사용자 종류 */}
      <div className="mb-2 text-[12px] text-[#3152B7] font-semibold">사용자 종류</div>
      <div className="mb-6 flex gap-3">
        <button
          type="button"
          onClick={() => setUserType("menti")}
          className={`h-10 rounded-md px-4 text-sm border ${
            userType === "menti"
              ? "bg-white text-[#111] border-[#3152B7]"
              : "bg-white text-[#6B7280] border-[#E5E7EB]"
          }`}
        >
          고등학생
        </button>
        <button
          type="button"
          onClick={() => setUserType("mento")}
          className={`h-10 rounded-md px-4 text-sm border ${
            userType === "mento"
              ? "bg-white text-[#111] border-[#3152B7]"
              : "bg-white text-[#6B7280] border-[#E5E7EB]"
          }`}
        >
          대학생
        </button>
      </div>

      <form onSubmit={goNext} className="space-y-5">
        {/* 이름 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">이름</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="이름"
          />
        </div>

        {/* 아이디(이메일) -> account */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">아이디(이메일)</label>
          <input
            type="email"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="example@domain.com"
          />
          {account && !isAccountFormatValid && (
            <p className="mt-1 text-xs text-red-600">올바른 이메일 형식이 아닙니다.</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">비밀번호</label>
          <div className="relative">
            <input
              type={show1 ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
              placeholder="비밀번호"
            />
            <button
              type="button"
              onClick={() => setShow1((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              aria-label="비밀번호 보기"
            >
              {show1 ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">비밀번호 확인</label>
          <div className="relative">
            <input
              type={show2 ? "text" : "password"}
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
              className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
              placeholder="비밀번호 확인"
            />
            <button
              type="button"
              onClick={() => setShow2((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              aria-label="비밀번호 보기"
            >
              {show2 ? "🙈" : "👁️"}
            </button>
          </div>
          {pw2 && pw2 !== password && (
            <p className="mt-1 text-xs text-red-600">비밀번호가 일치하지 않습니다.</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!canNext}
          className={`mt-4 h-12 w-full rounded-md text-sm font-medium ${
            canNext
              ? "bg-[#1aa752] text-white hover:bg-[#16924a]"
              : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          다음
        </button>
      </form>
    </AuthShell>
  );
}
