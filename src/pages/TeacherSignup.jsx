// src/pages/TeacherSignup.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "./_AuthShell";
import { loadSignupBase, clearSignupBase } from "../utils/signupStorage";

export default function TeacherSignup() {
  const nav = useNavigate();
  const base = loadSignupBase(); // { userType, name, account, password }

  const [nick, setNick] = useState("");
  const [univ, setUniv] = useState("");
  const [major, setMajor] = useState("");
  const [about, setAbout] = useState("");
  const [openchat, setOpenchat] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    // mento 단계 진입 검증
    if (!base || (base.userType !== "mento" && base.userType !== "MENTO")) {
      nav("/signup", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canStart =
    !!base && nick.trim() && univ.trim() && major.trim();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canStart || !base) return;

    const payload = {
      userType: "MENTO",           // ✅ 백엔드 Enum과 일치(대문자)
      name: base.name,
      account: base.account,       // ✅ account로 전송
      password: base.password,
      nickname: nick.trim(),
      schoolName: univ.trim(),
      major: major.trim(),
      openChatUrl: openchat.trim(), // 선택
      description: about.trim(),    // 선택
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const t = await res.text();
        setErr(`회원가입 실패: ${t}`);
        return;
      }

      clearSignupBase();
      nav("/teacher-home", { replace: true }); // 선생님 → TeacherHome
    } catch (e2) {
      console.error(e2);
      setErr("서버 오류가 발생했습니다.");
    }
  };

  return (
    <AuthShell>
      <div className="mb-8">
        <h3 className="text-[22px] font-semibold leading-7">
          {base?.name ?? ""}님,<br />반갑습니다!
        </h3>
        <p className="mt-2 text-sm text-[#6B7280]">우리 사이트는 별명으로 운영됩니다.</p>
      </div>

      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">별명</label>
          <input
            className="h-12 w-full rounded-md border px-4"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            placeholder="별명"
          />
        </div>

        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">대학교</label>
          <input
            className="h-12 w-full rounded-md border px-4"
            value={univ}
            onChange={(e) => setUniv(e.target.value)}
            placeholder="대학교"
          />
        </div>

        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">학과</label>
          <input
            className="h-12 w-full rounded-md border px-4"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="학과"
          />
        </div>

        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">한줄 소개</label>
          <input
            className="h-12 w-full rounded-md border px-4"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="소개"
          />
        </div>

        <div>
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">오픈 채팅방 (선택)</label>
          <input
            className="h-12 w-full rounded-md border px-4"
            value={openchat}
            onChange={(e) => setOpenchat(e.target.value)}
            placeholder="링크"
          />
        </div>

        {err && <p className="text-sm text-red-600">{err}</p>}

        <button
          type="submit"
          disabled={!canStart}
          className={`mt-4 h-12 w-full rounded-md text-sm font-medium ${
            canStart ? "bg-[#3152B7] text-white" : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          시작하기
        </button>
      </form>
    </AuthShell>
  );
}
