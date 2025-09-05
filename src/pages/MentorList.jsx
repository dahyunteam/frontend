// src/pages/MentorList.jsx
import { useEffect, useMemo, useState } from "react";

const FILTERS = ["전체", "이과", "문과", "예체능"];
const API_BASE = ""; // 실제 백엔드 베이스 URL 넣기 (예: http://localhost:8080)

const MOCK = [
  { id: 1, name: "고다현", school: "홍익대학교(서울)", major: "시각디자인과", track: "문과" },
  { id: 2, name: "고다현", school: "홍익대학교(서울)", major: "시각디자인과", track: "문과" },
  { id: 3, name: "고다현", school: "홍익대학교(서울)", major: "시각디자인과", track: "문과" },
];

export default function MentorList() {
  const [active, setActive] = useState("전체");
  const [raw, setRaw] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let aborted = false;
    async function run() {
      try {
        setLoading(true);
        setErr(null);
        const res = await fetch(`${API_BASE}/mento`, { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`GET /mento ${res.status}`);
        const json = await res.json();
        const items = (json.items ?? json ?? []).map((m, i) => ({
          id: m?.id ?? i,
          name: m?.name ?? "고다현",
          school: m?.school ?? "홍익대학교(서울)",
          major: m?.major ?? "시각디자인과",
          track: m?.track ?? "전체",
        }));
        if (!aborted) setRaw(items);
      } catch (e) {
        if (!aborted) {
          setErr(e?.message ?? "멘토 목록을 불러오지 못했어요");
          // 개발 중엔 에러 시 목데이터로라도 표시
          setRaw(MOCK);
        }
      } finally {
        if (!aborted) setLoading(false);
      }
    }
    run();
    return () => { aborted = true; };
  }, []);

  const mentors = useMemo(() => (active === "전체" ? raw : raw.filter(m => m.track === active)), [raw, active]);

  return (
    <div className="w-[1440px] h-[1024px] bg-[#F3F6FD] text-[#191919] mx-auto overflow-hidden">

      <main className="h-[calc(1024px-56px)] px-10 py-8">
        <h1 className="text-[20px] font-semibold">멘토 리스트</h1>

        <div className="mt-4 flex gap-2">
          {FILTERS.map(f => {
            const on = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`h-8 rounded-full border px-3 text-sm ${on ? "bg-[#3152B7] text-white border-[#3152B7]" : "bg-white text-[#6B7280] border-[#E5E7EB]"}`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg border border-[#E5E7EB] bg-white">
          <div className="grid grid-cols-[2fr_3fr_3fr_auto_auto] items-center gap-4 px-6 py-3 text-sm text-[#6B7280] border-b">
            <span>멘토 이름</span>
            <span>학교</span>
            <span>학과</span>
          </div>

          {err && <div className="px-6 py-4 text-sm text-red-600">{err}</div>}

          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="grid grid-cols-[2fr_3fr_3fr_auto_auto] items-center gap-4 px-6 py-4 border-b last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-neutral-200" />
                  <div className="h-4 w-20 rounded bg-neutral-200" />
                </div>
                <div className="h-4 w-48 rounded bg-neutral-200" />
                <div className="h-4 w-40 rounded bg-neutral-200" />
                <div className="justify-self-end h-8 w-20 rounded-full bg-neutral-200" />
                <div className="justify-self-end h-8 w-20 rounded-full bg-neutral-200" />
              </div>
            ))
          ) : (
            mentors.map(m => (
              <div key={m.id} className="grid grid-cols-[2fr_3fr_3fr_auto_auto] items-center gap-4 px-6 py-5 border-b last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="grid h-6 w-6 place-items-center rounded-full border border-[#D1D5DB]">
                    <span className="text-xs">👤</span>
                  </div>
                  <span className="font-medium">{m.name}</span>
                </div>
                <span className="text-[#4B5563]">{m.school}</span>
                <span className="text-[#4B5563]">{m.major}</span>
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
            ))
          )}
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
