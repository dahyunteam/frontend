import { useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function QuestionMajor({ prev1Id, prev2Id, prev3Id, prev4Id }) {

    const navigate = useNavigate();

    const [loadingIds, setLoadingIds] = useState(false);
  const [loadingMajors, setLoadingMajors] = useState(false);
  const [error, setError] = useState(null);

  const [majorIds, setMajorIds] = useState([]);
  const [majors, setMajors] = useState([]);
  const [selected, setSelected] = useState(null);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    p.set("prev1Id", String(prev1Id));
    p.set("prev2Id", String(prev2Id));
    p.set("prev3Id", String(prev3Id));
    p.set("prev4Id", String(prev4Id));
    return p.toString();
  }, [prev1Id, prev2Id, prev3Id, prev4Id]);

      useEffect(() => {
    let aborted = false;
    async function run() {
      try {
        setError(null);
        setLoadingIds(true);
        const res = await fetch(`${API_BASE}/question/5?${qs}`, {
          method: "GET",
          headers: { "Accept": "application/json" },
        });
        if (!res.ok) throw new Error(`Q5 ids fetch failed (${res.status})`);
        const data = await res.json();
        if (!aborted) setMajorIds(data.majorIds ?? []);
      } catch (e) {
        if (!aborted) setError(e?.message ?? "학과 ID 조회 실패");
      } finally {
        if (!aborted) setLoadingIds(false);
      }
    }
    run();
    return () => { aborted = true; };
  }, [qs]);

  // 2) 학과 상세 조회 (ids -> 카드 데이터)
  useEffect(() => {
    let aborted = false;
    async function run() {
      if (!majorIds.length) {
        setMajors([]);
        return;
      }
      try {
        setError(null);
        setLoadingMajors(true);
        const res = await fetch(`${API_BASE}/majors?ids=${majorIds.join(",")}`, {
          headers: { "Accept": "application/json" },
        });
        if (!res.ok) throw new Error(`Majors fetch failed (${res.status})`);
        const json = await res.json();
        const mapped = (json.items ?? []).map(it => ({
          id: it.id,
          title: it.name ?? it.title,
          description: it.body ?? it.description ?? "",
        }));
        if (!aborted) setMajors(mapped);
      } catch (e) {
        if (!aborted) setError(e?.message ?? "학과 상세 조회 실패");
      } finally {
        if (!aborted) setLoadingMajors(false);
      }
    }
    run();
    return () => { aborted = true; };
  }, [majorIds]);

  const isLoading = loadingIds || loadingMajors;

    return (
        <div className="w-[1440px] h-[1024px] bg-[#F7FAFF] text-neutral-900 mx-auto">
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

      {/* 메인 */}
      <main className="flex flex-1">
        {/* 왼쪽 질문 순서 */}
        <aside className="w-[465px] h-[944px] shadow-[4px_4px_10px_rgba(0,0,0,0.15)] overflow-visible bg-white p-8 flex flex-col justify-around">
          <div className="space-y-4">
            <p className='text-black text-[18px] font-semibold'>질문 순서</p>
            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#3152B7] rounded-lg shadow-sm bg-blue-50">
                <img
                        src="/icon/circle-blue.svg"
                        alt="circle"
                        className="mt-1 h-[24px]"
                    />
                <div>
                  <p className="font-semibold text-lg text-[#191919]">나와 어울리는 분야는?</p>
                  <p className="font-normal text-sm text-[#565656] text-center">나와 어울리는 분야를 선택해요</p>
                </div>
              </div>
              {/* bar */}
              <img 
                src="/icon/icon-bar.svg"
                className='-mt-12 -mb-11 ml-13 z-10 relative'
              />
              {/* Step 2 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#3152B7] rounded-lg shadow-sm bg-blue-50">
                <img
                        src="/icon/circle-blue.svg"
                        alt="circle"
                        className="mt-1 h-[24px]"
                    />
                <div>
                  <p className="font-semibold text-lg text-[#191919]">내가 좋아하는 과목은?</p>
                  <p className="font-normal text-sm text-[#565656] text-center">과목 선택으로 더 구체화해요</p>
                </div>
              </div>
              {/* bar */}
              <img 
                src="/icon/icon-bar.svg"
                className='-mt-12 -mb-11 ml-13 z-10 relative'
              />
              {/* Step 3 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#3152B7] rounded-lg shadow-sm bg-blue-50">
                <img
                        src="/icon/circle-blue.svg"
                        alt="circle"
                        className="mt-1 h-[24px]"
                    />
                <div>
                  <p className="font-semibold text-lg text-[#191919]">나의 성장기</p>
                  <p className="font-normal text-sm text-[#565656] text-center">현재 나는 어떤 상태인지 확인해요</p>
                </div>
              </div>
              {/* bar */}
              <img 
                src="/icon/icon-bar.svg"
                className='-mt-12 -mb-11 ml-13 z-10 relative'
              />
              {/* Step 4 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#3152B7] rounded-lg shadow-sm bg-blue-50">
                <img
                        src="/icon/circle-blue.svg"
                        alt="circle"
                        className="mt-1 h-[24px]"
                    />
                <div>
                  <p className="font-semibold text-lg text-[#191919]">내가 좋아하는 공부</p>
                  <p className="font-normal text-sm text-[#565656] text-center">구체적인 성향을 확인해요</p>
                </div>
              </div>
              {/* bar */}
              <img 
                src="/icon/icon-bar.svg"
                className='-mt-12 -mb-12 ml-13 z-10 relative'
              />
              {/* Step 5 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#3152B7] rounded-lg shadow-sm bg-blue-50">
                <img
                        src="/icon/circle-blue.svg"
                        alt="circle"
                        className="mt-1 h-[24px]"
                    />
                <div>
                  <p className="font-semibold text-lg text-[#191919]">관심학과 선택하기</p>
                  <p className="font-normal text-sm text-[#565656] text-center">마지막으로 학과 선택하기</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="w-[102px] h-[62px] !p-0 flex justify-center items-center rounded-lg !bg-[#3152B7] text-white font-normal text-xl">종료하기</button>
          </div>
        </aside>

        {/* 오른쪽 질문 박스 */}
        <section className="flex-1 p-10 bg-[#F7FAFF]">
          <h2 className="text-[24px] font-semibold mb-2 text-[#191919]">성향에 맞는 학과 하나를 선택하세요!</h2>
          <p className="text-xs text-gray-500 mb-12 text-[#565656]">아래 학과 중 하나를 선택하면 해당 학과가 추천된 학과로 프로필에 입력돼요</p>
          {/* 에러/로딩/목록 */}
          {error ? (
            <div className="mt-8 text-sm text-red-600">{error}</div>
          ) : (
            <div className="mt-8 grid grid-cols-3 gap-8 max-w-[980px]">
              {isLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="rounded-xl border border-neutral-200 bg-white p-10">
                      <div className="h-5 w-24 rounded bg-neutral-200" />
                      <div className="mt-6 space-y-2">
                        <div className="h-3 w-full rounded bg-neutral-200" />
                        <div className="h-3 w-5/6 rounded bg-neutral-200" />
                        <div className="h-3 w-4/6 rounded bg-neutral-200" />
                      </div>
                    </div>
                  ))
                : majors.map(m => {
                    const on = selected === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setSelected(m.id)}
                        className={`rounded-xl border px-10 py-10 text-left transition bg-white
                          ${on ? "border-[#3152B7] shadow-[0_8px_24px_rgba(49,82,183,0.18)]" : "border-neutral-200 hover:border-[#8FA3F7]"}`}
                      >
                        <div className="text-center">
                          <p className="text-[16px] font-semibold text-[#191919]">{m.title}</p>
                          <p className="mt-6 whitespace-pre-line text-center text-sm leading-6 text-[#8C8C8C]">{m.description}</p>
                        </div>
                      </button>
                    );
                  })}
            </div>
          )}

          {/* 하단 버튼 */}
          <div className="mt-10 max-w-[980px] space-y-4">
            <button className="w-full h-[56px] rounded-lg border border-[#3152B7] text-[#3152B7] font-semibold">
              관련 과 멘토 찾기
            </button>
            <button
              disabled={!selected}
              className={`w-full h-[56px] rounded-lg font-semibold
                ${selected ? "bg-[#3152B7] text-white" : "bg-neutral-300 text-neutral-500 cursor-not-allowed"}`}
            >
              성향 조사 완료하기
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
