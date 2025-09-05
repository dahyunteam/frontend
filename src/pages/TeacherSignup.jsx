import React, { useState } from "react";

export default function TeacherSignupPage() {
  const [form, setForm] = useState({
    nickname: "",
    university: "",
    major: "",
    intro: "",
    chat: "",
  });

  // 모든 값이 채워졌는지 확인
  const isFormComplete = Object.values(form).every((v) => v.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex w-[1440px] h-[1024px] bg-[#F7FAFF] text-neutral-900 mx-auto">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center">
        <h1 className="text-3xl font-bold">커비티아이</h1>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-1/2 flex flex-col justify-center px-20 space-y-6">
        {/* 인사말 */}
        <div>
          <h1 className="text-2xl font-bold">고다현님, <br/>반갑습니다!</h1>
          <p className="text-gray-500 text-sm mt-2">
            우리 사이트는 별명으로 운영되며 익명 중심의 사이트입니다.
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#00207F] text-[14px] mb-1">별명</label>
            <input
              type="text"
              placeholder="별명"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              className="w-full h-[54px] items-start p-4 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#00207F] text-[14px] mb-1">대학교</label>
            <input
              type="text"
              name="university"
              value={form.university}
              onChange={handleChange}
              placeholder="대학교"
              className="w-full h-[54px] items-start p-4 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#00207F] text-[14px] mb-1">학과</label>
            <input
              type="text"
              name="major"
              value={form.major}
              onChange={handleChange}
              placeholder="학과"
              className="w-full h-[54px] items-start p-4 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#00207F] text-[14px] mb-1">한줄 소개</label>
            <input
              type="text"
              name="intro"
              value={form.intro}
              onChange={handleChange}
              placeholder="소개"
              className="w-full h-[54px] items-start p-4 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#00207F] text-[14px] mb-1">
              오픈 채팅방 <span className="text-xs text-[#00207F] text-[14px]">(학생과의 소통 목적)</span>
            </label>
            <input
              type="text"
              name="chat"
              value={form.chat}
              onChange={handleChange}
              placeholder="링크"
              className="w-full h-[54px] items-start p-4 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 버튼 */}
        <button
          disabled={!isFormComplete}
          className={`w-full py-4 mt-6 rounded-md font-medium transition-colors ${
            isFormComplete
              ? "bg-[#00207F] text-white cursor-pointer"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
