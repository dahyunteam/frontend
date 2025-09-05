import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ⬅ 추가
import AuthShell from "./_AuthShell";

export default function StudentSignup() {
  const [nick, setNick] = useState("");
  const [age, setAge] = useState("");

  const canStart = nick.trim() && age.trim();

  const nav = useNavigate();                      // ⬅ 추가

  const handleStart = (e) => {
    e.preventDefault();
    if (!canStart) return;

    // TODO: 백엔드 API 연동 후 성공 시 이동
    nav("/home", { replace: true });              // ⬅ Home으로 이동
  };

  return (
    <AuthShell>
      <div className="mb-8">
        <h3 className="text-[22px] font-semibold leading-7">
          고다현님
          <br />반갑습니다!
        </h3>
        <p className="mt-2 text-sm text-[#6B7280]">
          우리 사이트는 별명으로 운영되고 있습니다.
        </p>
      </div>

      <form onSubmit={handleStart} className="space-y-5">
        {/* 별명 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">별명</label>
          <input
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="이름"
          />
        </div>

        {/* 나이 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">나이</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="나이"
          />
        </div>

        <button
          type="submit"                            // ⬅ submit 으로 처리
          disabled={!canStart}
          className={`mt-4 h-12 w-full rounded-md text-sm font-medium transition
            ${
              canStart
                ? "bg-[#3152B7] text-white hover:bg-[#2643a0]"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }`}
        >
          시작하기
        </button>
      </form>
    </AuthShell>
  );
}
