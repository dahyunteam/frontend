import React from "react";

const LOGO_SRC = "/icon/메인로고.png";

const mentors = [
  { name: "별명 가나다", dept: "머머대학교 무슨무슨과" },
  { name: "별명 가나다", dept: "머머대학교 무슨무슨과" },
  { name: "별명 가나다", dept: "머머대학교 무슨무슨과" },
];

const qas = [
  "이 서비스는 공신력이 있는 서비스인가요?",
  "이 서비스는 공신력이 있는 서비스인가요?",
  "이 서비스는 공신력이 있는 서비스인가요?",
  "이 서비스는 공신력이 있는 서비스인가요?",
  "이 서비스는 공신력이 있는 서비스인가요?",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="w-full px-4 md:px-6">
          <div className="flex h-14 items-center justify-between">
            <nav className="flex items-center gap-8 text-sm">
              <img src={LOGO_SRC} alt="서비스 로고" className="w-8 h-8 object-contain select-none" />
              <span className="font-semibold">커비티아이</span>
              <a className="text-slate-500 hover:text-slate-900" href="#">홈</a>
              <a className="text-slate-500 hover:text-slate-900" href="#">멘토 리스트</a>
              <a className="text-slate-500 hover:text-slate-900" href="#">채팅</a>
            </nav>
            <div className="flex items-center gap-5 text-sm">
              <a className="text-slate-500 hover:text-slate-900" href="#">내 프로필</a>
              <button aria-label="menu" className="p-1 rounded-md border">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 본문: 부모는 패딩 없음(→ 화면 진짜 꽉) */}
      <main className="w-full pt-8 pb-16">
        {/* 좌 360px 고정 + 우 1fr */}
        <div className="grid lg:[grid-template-columns:360px_1fr] gap-x-8">
          {/* ===== 왼쪽 패널: 왼쪽만 패딩 주기 ===== */}
          <aside className="pl-4 md:pl-6">
            <div className="sticky lg:top-[56px] rounded-2xl bg-white px-10 py-12 shadow-sm ring-1 ring-slate-200 flex flex-col items-center text-center">
              <img src={LOGO_SRC} alt="서비스 로고" className="w-28 h-28 object-contain select-none" />
              <p className="mt-6 text-sm text-blue-700 font-medium">
                내 성향대로, 내 진로대로!<br/>맞춤형 진로 추천 플랫폼
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">커비티아이</h2>
              <p className="mt-6 text-sm leading-6 text-slate-600">
                흥미와 성향 기반으로 딱 맞는 <br/>
                진로를 추천받고,<br/>
                대학생 멘토들에게 바로 질문하며<br/>
                미래를 준비할 수 있는 플랫폼
              </p>
              <button className="mt-10 w-full rounded-xl bg-blue-700 px-6 py-4 text-white font-semibold shadow-sm hover:bg-blue-800">
                내 진로 찾기 시작하기
              </button>
            </div>
          </aside>

          {/* ===== 오른쪽: 우측 끝까지 풀 ===== */}
          <section className="min-w-0 pr-4 md:pr-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">내가 선택한 선생님</h3>
              <button className="rounded-xl bg-white px-4 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                자세히보기
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {mentors.map((m, i) => (
                <MentorCard key={i} {...m} />
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-3">Q&amp;A</h4>
              <div className="space-y-4">
                {qas.map((t, i) => <QAItem key={i} text={t} />)}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function MentorCard({ name, dept }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 h-full">
      <div className="flex items-center gap-4">
        <div className="grid place-items-center w-12 h-12 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
            <path d="M4 20a8 8 0 0 1 16 0" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-slate-500 truncate">{dept}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded-lg bg-blue-700 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
          오픈채팅하기
        </button>
        <button className="flex-1 rounded-lg bg-white py-2.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50">
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
