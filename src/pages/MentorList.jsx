// src/pages/MentorList.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const FILTERS = ["전체", "이과", "문과", "예체능"];

// ✅ 더미 데이터
const MOCK = [
  { id: 1, name: "고다현", school: "홍익대학교(서울)", major: "시각디자인과", track: "문과" },
  { id: 2, name: "김민수", school: "서울대학교",       major: "기계공학과",   track: "이과" },
  { id: 3, name: "이서연", school: "이화여자대학교",   major: "체육학과",     track: "예체능" },
  { id: 4, name: "박지훈", school: "연세대학교",       major: "경영학과",     track: "문과" },
];

export default function MentorList() {
  const nav = useNavigate();

  const [active, setActive] = useState("전체");
  const [raw, setRaw] = useState(MOCK); // ✅ 처음부터 목데이터
  const [selected, setSelected] = useState([]); // 선택한 멘토 id 배열

  // 최초 진입 시 localStorage에서 이전 선택 불러오기
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("selectedMentors") || "[]");
      setSelected(saved.map((m) => m.id));
    } catch {
      setSelected([]);
    }
  }, []);

  // 필터링
  const mentors = useMemo(
    () => (active === "전체" ? raw : raw.filter((m) => m.track === active)),
    [raw, active]
  );

  // 선택/해제 토글
  const toggleSelect = (mentor) => {
    setSelected((prev) => {
      const exists = prev.includes(mentor.id);
      const next = exists ? prev.filter((id) => id !== mentor.id) : [...prev, mentor.id];

      // ✅ localStorage 동기화 (Navbar/SelectedMentors에서 사용)
      const selectedObjs = (exists
        ? JSON.parse(localStorage.getItem("selectedMentors") || "[]").filter((m) => m.id !== mentor.id)
        : [...new Map([...JSON.parse(localStorage.getItem("selectedMentors") || "[]"), mentor].map(m => [m.id, m])).values()] // 중복 제거
      );

      // exists=false인 경우 직접 push
      if (!exists) {
        selectedObjs.push({ id: mentor.id, name: mentor.name, school: mentor.school, major: mentor.major });
      }

      localStorage.setItem("selectedMentors", JSON.stringify(selectedObjs));
      localStorage.setItem("selectedMentorCount", String(selectedObjs.length));

      return next;
    });
  };

  const goNext = () => nav("/my-mentors");

  return (
    <div className="w-[1440px] h-[1024px] bg-[#F3F6FD] text-[#191919] mx-auto overflow-hidden">
      <main className="h-[calc(1024px-56px)] px-10 py-8">
        <h1 className="text-[20px] font-semibold">멘토 리스트</h1>

        {/* 필터 */}
        <div className="mt-4 flex gap-2">
          {FILTERS.map((f) => {
            const on = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`h-8 rounded-full border px-3 text-sm ${
                  on ? "bg-[#3152B7] text-white border-[#3152B7]" : "bg-white text-[#6B7280] border-[#E5E7EB]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* 테이블 */}
        <div className="mt-6 rounded-lg border border-[#E5E7EB] bg-white">
          {/* 헤더 */}
          <div
            className="grid grid-cols-[2fr_3fr_3fr_auto_auto] items-center gap-4
            px-6 py-3 text-sm text-[#6B7280] border-b bg-[#f5f5f5]"
          >
            <span className="pl-4">멘토 이름</span>
            <span>학교</span>
            <span className="pl-0 text-left">학과</span>
          </div>

          {/* 목록 */}
          {mentors.map((m) => {
            const picked = selected.includes(m.id);
            return (
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

                {/* 상담하기 (자리표시자) */}
                <div className="justify-self-end">
                  <button className="h-8 rounded-full border border-[#AEC2FF] px-4 text-[#3152B7] text-sm hover:bg-[#F3F6FF]">
                    상담하기
                  </button>
                </div>

                {/* 선택/해제 */}
                <div className="justify-self-end">
                  <button
                    onClick={() => toggleSelect(m)}
                    className={`h-8 rounded-full px-4 text-sm ${
                      picked
                        ? "bg-[#D1E7DD] text-[#0F5132] border border-[#A3CFBB] hover:bg-[#c8e2d7]"
                        : "bg-[#3152B7] text-white hover:bg-[#2643a0]"
                    }`}
                  >
                    {picked ? "선택됨" : "선택"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 하단 버튼 */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={goNext}
            className="h-9 rounded-md bg-white px-4 text-sm border border-[#E5E7EB] hover:bg-neutral-50"
          >
            다음
          </button>
        </div>
      </main>
    </div>
  );
}
