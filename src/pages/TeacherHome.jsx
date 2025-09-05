
import React from "react";
import { Link } from "react-router-dom";


const LOGO_SRC = "/icon/logo.png";

const mentors = [
  { name: "별명 가나다", dept: "머머대학교 무슨무슨과" },
  { name: "별명 가나다", dept: "머머대학교 무슨무슨과" },
  { name: "별명 가나다", dept: "머머대학교 무슨무슨과" },
];

const qas = [
  "이 서비스를 이용하면 어떤 진로 정보를 얻을 수 있나요?",
  "멘토는 어떤 기준으로 선정되었나요?",
  "멘토에게 개인적인 고민도 물어봐도 되나요?",
  "상담 중 멘토 변경이 가능한가요?",
  "학부모도 상담에 참여할 수 있나요?",
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 레이아웃 */}
      <div className="relative pt-14">

        {/* 오른쪽 메인 */}
        <main className="w-full lg:ml-[180px] px-4 md:px-6 py-0">
          <div className="mx-auto max-w-5xl relative -mt-6">
            {/* 상단 타이틀/버튼 */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">내가 선택한 선생님</h3>
              <button className="rounded-xl bg-white px-4 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                자세히보기
              </button>
            </div>

            {/* 멘토 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {mentors.map((m, i) => (
                <MentorCard key={i} {...m} />
              ))}
            </div>

            {/* Q&A 섹션 */}
            <section className="mt-10">
              <h4 className="text-lg font-semibold mb-3">Q&amp;A</h4>
              <div className="space-y-4">
                {qas.map((t, i) => (
                  <QAItem key={i} text={t} />
                ))}
              </div>
            </section>
          </div>
        </main>

        {/* 모바일/태블릿용 사이드 (상단) */}
        <aside className="lg:hidden px-4 md:px-6 mt-4">
          <div className="rounded-2xl bg-white px-8 py-10 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <img
                src={LOGO_SRC}
                alt="서비스 로고"
                className="w-24 h-24 object-contain select-none"
              />
              <p className="text-sm text-blue-700 font-medium leading-6">
                내 성향대로, 내 진로대로!
                <br />
                맞춤형 진로 추천 플랫폼
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight">
                커비티아이
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                흥미와 성향 기반으로 딱 맞는
                <br />
                진로를 추천받고,
                <br />
                대학생 멘토들에게 바로 질문하며
                <br />
                미래를 준비할 수 있는 플랫폼
              </p>
              <button className="w-full rounded-xl bg-blue-700 px-6 py-4 text-white font-semibold shadow-sm hover:bg-blue-800">
                내 진로 찾기 시작하기
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* === components === */

function MentorCard({ name, dept }) {
  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-md ring-1 ring-slate-200">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center w-10 h-10 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
            <path d="M4 20a8 8 0 0 1 16 0" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-tight">{name}</p>
          <p className="text-xs text-slate-500 truncate leading-tight">
            {dept}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-2.5">
        <button className="flex-1 rounded-lg bg-blue-700 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
          오픈채팅하기
        </button>
        <button className="flex-1 rounded-lg bg-white py-2 text-xs sm:text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50">
          상담하기
        </button>
      </div>
    </div>
  );
}

function QAItem({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
      <span className="grid place-items-center h-7 w-7 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
        Q.
      </span>
      <p className="text-sm">{text}</p>
    </div>
  );
}
