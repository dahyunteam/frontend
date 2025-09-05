// src/pages/SelectedMentors.jsx
import { useState } from "react";

export default function SelectedMentors() {
  // ✅ 더미 데이터 (원하면 서버 연결 후 이 부분만 교체하면 됨)
  const [rows] = useState([
    { id: 1, name: "별명 가나다", school: "머머대학교", major: "무슨무슨과" },
    { id: 2, name: "별명 가나다2", school: "머머대학교", major: "무슨무슨과" },
    { id: 3, name: "별명 가나다3", school: "머머대학교", major: "무슨무슨과" },
  ]);

  return (
    <div className="w-[1440px] h-[1024px] bg-[#F3F6FD] text-[#191919] mx-auto overflow-hidden">
      {/* 헤더는 MainLayout에 있으면 생략 */}
      <main className="h-[calc(1024px-56px)] px-10 py-8">
        <h1 className="text-[20px] font-semibold">내가 선택한 선생님</h1>

        <div className="mt-6 rounded-lg border border-[#E5E7EB] bg-white">
          {/* 테이블 헤더 */}
          <div
            className="grid grid-cols-[2fr_3fr_3fr_auto_auto] items-center gap-4
            px-6 py-3 text-sm text-[#6B7280] border-b bg-[#f5f5f5]"
          >
            <span className="pl-4">멘토 이름</span>
            <span>학교</span>
            <span className="pl-0 text-left">학과</span>
          </div>

          {/* 데이터 출력 */}
          {rows.map((m) => (
            <div
              key={m.id}
              className="grid grid-cols-[2fr_3fr_3fr_auto_auto] items-center gap-4 px-6 py-5 border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-6 w-6 place-items-center rounded-full border border-[#D1D5DB]">
                  <span className="text-xs">👤</span>
                </div>
                <span className="font-medium">{m.name}</span>
              </div>
              <span className="text-[#4B5563]">{m.school}</span>
              <span className="pl-18 text-[#4B5563]">{m.major}</span>
              <div className="justify-self-end">
                <button className="h-8 rounded-full border border-[#AEC2FF] px-4 text-[#3152B7] text-sm hover:bg-[#F3F6FF]">
                  상담하기
                </button>
              </div>
              <div className="justify-self-end">
                <button className="h-8 rounded-full bg-[#3152B7] px-4 text-white text-sm hover:bg-[#2643a0]">
                  오픈채팅
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button className="h-9 rounded-md bg-white px-4 text-sm border border-[#E5E7EB] hover:bg-neutral-50">
            다음
          </button>
        </div>
      </main>
    </div>
  );
}
