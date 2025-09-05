import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "./_AuthShell";

export default function SignupChoice() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("high"); // "high" | "uni"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const canNext = name.trim() && email.trim() && pw && pw2 && pw === pw2;

  const goNext = (e) => {
    e.preventDefault();
    if (!canNext) return;
    // 실제 요청을 보낸 뒤 성공하면 타입에 따라 다음 단계로
    if (userType === "high") navigate("/studentsignup");
    else navigate("/teachersignup");
  };

  return (
    <AuthShell>
      <h2 className="text-[22px] font-semibold mb-8">회원가입</h2>

      {/* 사용자 종류 */}
      <div className="mb-2 text-[12px] text-[#3152B7] font-semibold">사용자 종류</div>
      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setUserType("high")}
          className={`h-10 rounded-md px-4 text-sm border ${
            userType === "high"
              ? "bg-white text-[#111] border-[#3152B7]"
              : "bg-white text-[#6B7280] border-[#E5E7EB]"
          }`}
        >
          고등학생
        </button>
        <button
          onClick={() => setUserType("uni")}
          className={`h-10 rounded-md px-4 text-sm border ${
            userType === "uni"
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

        {/* 이메일 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">이메일</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="이메일"
            type="email"
          />
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">비밀번호</label>
          <div className="relative">
            <input
              type={show1 ? "text" : "password"}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
              placeholder="Password"
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
              placeholder="Password"
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
        </div>

        <button
          type="submit"
          disabled={!canNext}
          className={`mt-4 h-12 w-full rounded-md text-sm font-medium transition
          ${
            canNext
              ? "bg-[#3152B7] text-white hover:bg-[#2643a0]"
              : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          회원가입
        </button>
      </form>
    </AuthShell>
  );
}
