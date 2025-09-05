import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ⬅ 추가
import AuthShell from "./_AuthShell";

export default function TeacherSignup() {
  const [nick, setNick] = useState("");
  const [univ, setUniv] = useState("");
  const [major, setMajor] = useState("");
  const [about, setAbout] = useState("");
  const [openchat, setOpenchat] = useState("");

  const canStart = nick.trim() && univ.trim() && major.trim();

  const nav = useNavigate();                      // ⬅ 추가

  // 제출 핸들러 (백엔드 연동 후 성공 시 이동)
  const handleStart = async (e) => {
    e.preventDefault();

    // TODO: await fetch('/api/signup/teacher', { method:'POST', body: ... })
    // 성공했다고 가정하고 이동
    nav("/teacher-home", { replace: true });
  };

  return (
    <AuthShell>
      <div className="mb-8">
        <h3 className="text-[22px] font-semibold leading-7">
          고다현님,
          <br />반갑습니다!
        </h3>
        <p className="mt-2 text-sm text-[#6B7280]">
          우리 사이트는 별명으로 운영되고 있습니다.
        </p>
      </div>

      {/* form 으로 감싸서 Enter 입력도 처리 */}
      <form onSubmit={handleStart} className="space-y-5">
        {/* 별명 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">별명</label>
          <input
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="별명"
          />
        </div>

        {/* 대학교 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">대학교</label>
          <input
            value={univ}
            onChange={(e) => setUniv(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="대학교"
          />
        </div>

        {/* 학과 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">학과</label>
          <input
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="학과"
          />
        </div>

        {/* 한줄 소개 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">한줄 소개</label>
          <input
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="소개"
          />
        </div>

        {/* 오픈 채팅방 */}
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">
            오픈 채팅방 ( 학생과의 소통 목적 )
          </label>
          <input
            value={openchat}
            onChange={(e) => setOpenchat(e.target.value)}
            className="h-12 w-full rounded-md border border-[#E5E7EB] px-4 text-sm outline-none focus:ring-2 focus:ring-[#3152B7]"
            placeholder="링크"
          />
        </div>

        <button
          type="submit"                               // ⬅ submit 로 처리
          disabled={!canStart}
          className={`mt-4 h-12 w-full rounded-md text-sm font-medium transition
            ${canStart ? "bg-[#3152B7] text-white hover:bg-[#2643a0]" : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"}`}
        >
          시작하기
        </button>
      </form>
    </AuthShell>

  );
}
