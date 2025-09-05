import React from "react";

const mentors = [
  { name: "이름", dept: "머머대학교 무슨무슨과" },
  { name: "이름", dept: "머머대학교 무슨무슨과" },
  { name: "이름", dept: "머머대학교 무슨무슨과" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* 헤더: 높이 56px (h-14) → 아래 계산에서 사용 */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="w-full px-8">
          <div className="flex h-14 items-center justify-between">
            <nav className="flex items-center gap-8 text-sm">
              <span className="font-semibold">서비스 네이밍</span>
              <a className="hover:text-black text-neutral-500" href="#">홈</a>
              <a className="hover:text-black text-neutral-500" href="#">멘토 리스트</a>
              <a className="hover:text-black text-neutral-500" href="#">채팅</a>
            </nav>
            <div className="flex items-center gap-5 text-sm">
              <a className="hover:text-black text-neutral-500" href="#">내 프로필</a>
              <button aria-label="menu" className="size-5 rounded-sm border border-neutral-300" />
            </div>
          </div>
        </div>
      </header>

      {/* 본문 컨테이너 */}
      <main className="w-full px-8 py-10">
        {/* 좌 340px 고정 + 우측 유동 그리드 (데스크톱에서 적용) */}
        <div className="grid gap-10 lg:[grid-template-columns:340px_1fr]">
          
          {/* ===== 왼쪽: 노란 패널 (세로 꽉) ===== */}
          <aside>
            <div
              className={[
                // 좌측을 화면 끝까지 붙이고 싶으면 다음 한 줄만 켜도 됨
                // "-mx-8 px-8",
                "bg-amber-200/70",
                "rounded-md",
                "p-8",
                // 헤더 56px 제외하고 세로 꽉
                "min-h-[calc(100vh-56px)]",
                // 내용 간격
                "flex flex-col"
              ].join(" ")}
            >
              <h2 className="text-2xl font-semibold leading-snug">
                나에게 맞는 진로, 학과가 무엇일까
              </h2>

              <ul className="mt-6 space-y-2 text-sm text-neutral-800">
                <li>서비스 설명 설명설명설명</li>
                <li>서비스 설명 설명설명설명</li>
                <li>서비스 설명 설명설명설명</li>
                <li>서비스 설명 설명설명설명</li>
              </ul>

              <button className="mt-8 w-full rounded-md border bg-white px-6 py-4 text-base font-medium hover:bg-neutral-50">
                시작하기
              </button>
            </div>
          </aside>

          {/* ===== 오른쪽: 콘텐츠 ===== */}
          <section className="min-w-0">
            {/* 상단 타이틀/우측 버튼 라인 */}
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">내가 선택한 선생님</h3>
              <button className="rounded-md bg-neutral-100 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-200">
                자세히보기
              </button>
            </div>

            {/* 멘토 카드 3열 (브레이크포인트별 1/2/3열) */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {mentors.map((m, i) => (
                <MentorCard key={i} {...m} />
              ))}
            </div>

            {/* Q&A 큰 박스: 오른쪽 폭에 정확히 맞춤 */}
            <div className="mt-10 rounded-md bg-neutral-200 p-8">
              <h4 className="text-lg font-semibold">Q&amp;A</h4>
              <p className="mt-6 text-lg">
                질문
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function MentorCard({ name, dept }) {
  return (
    <div className="rounded-md bg-neutral-200 p-8">
      <div className="flex items-start gap-4">
        <span className="mt-1 inline-block size-10 rounded-full border-2 border-neutral-300 bg-white" />
        <div className="min-w-0">
          <p className="text-base font-semibold">{name}</p>
          <p className="text-sm text-neutral-700 truncate">{dept}</p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <button className="w-full rounded-md bg-white py-3 text-sm font-medium hover:bg-neutral-50">
          오픈채팅 바로가기
        </button>
        <button className="w-full rounded-md bg-white py-3 text-sm font-medium hover:bg-neutral-50">
          채팅하기
        </button>
      </div>
    </div>
  );
}
