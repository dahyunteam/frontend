// src/pages/SelectedMentors.jsx
import { useEffect, useState } from "react";

const API_BASE = ""; // ex) http://localhost:8080
const ENDPOINT = "/me-profile/menti/select";

export default function SelectedMentors() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const res = await fetch(`${API_BASE}${ENDPOINT}`, {
          headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${token}` // 인증 필요하면 추가
          },
        });
        if (!res.ok) throw new Error(`${ENDPOINT} ${res.status}`);
        const json = await res.json();
        // 응답 필드에 맞게 매핑
        const items = (json.items ?? json ?? []).map((m, i) => ({
          id: m.id ?? i,
          name: m.name ?? m.mentorName ?? "이름",
          school: m.school ?? m.univ ?? "",
          major: m.major ?? m.department ?? "",
        }));
        if (!aborted) setRows(items);
      } catch (e) {
        if (!aborted) setErr(e?.message ?? "목록을 불러오지 못했어요");
      } finally {
        if (!aborted) setLoading(false);
      }
    })();
    return () => { aborted = true; };
  }, []);

  return (
    <div className="w-[1440px] h-[1024px] bg-[#F3F6FD] text-[#191919] mx-auto overflow-hidden">
      {/* 헤더는 MainLayout에 있으면 생략 */}
      <main className="h-[calc(1024px-56px)] px-10 py-8">
        <h1 className="text-[20px] font-semibold">내가 선택한 선생님</h1>

        <div className="mt-6 rounded-lg border border-[#E5E7EB] bg-white">
          {/* 테이블 헤더 */}
          <div className="grid grid-cols-[2fr_3fr_3fr_auto_auto] items-center gap-4 px-6 py-3 text-sm text-[#6B7280] border-b">
            <span>멘토 이름</span>
            <span>학교</span>
            <span>학과</span>
            <span className="justify-self-end">상담하기</span>
            <span className="justify-self-end">오픈채팅</span>
          </div>

          {err && <div className="px-6 py-4 text-sm text-red-600">{err}</div>}

          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
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
            : rows.map((m) => (
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
