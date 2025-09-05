// src/pages/StudentSignup.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "./_AuthShell";
import { loadSignupBase, clearSignupBase } from "../utils/signupStorage";

export default function StudentSignup() {
  const nav = useNavigate();
  const base = loadSignupBase(); // { userType, name, account, password }
  const [nick, setNick] = useState("");
  const [age, setAge] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!base || (base.userType !== "menti" && base.userType !== "MENTI")) {
      nav("/signup", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ageNum = Number(age.trim());
  const isAgeValid = Number.isInteger(ageNum) && ageNum > 0 && ageNum < 120;
  const canStart = !!base && nick.trim().length > 0 && isAgeValid;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canStart || !base) return;

    const payload = {
      userType: "MENTI",
      name: base.name,
      account: base.account,
      password: base.password,
      nickname: nick.trim(),
      age: ageNum,
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

      // ✅ 성공시 저장
      localStorage.setItem("nickname", nick.trim());
      localStorage.setItem("userType", "stud");

      clearSignupBase();
      nav("/home", { replace: true });
    } catch (e2) {
      console.error(e2);
      setErr("서버 오류가 발생했습니다.");
    }
  };

  return (
    <AuthShell>
      <div className="mb-8">
        <h3 className="text-[22px] font-semibold leading-7">
          {base?.name ?? ""}님<br />반갑습니다!
        </h3>
        <p className="mt-2 text-sm text-[#6B7280]">우리 사이트는 별명으로 운영되고 익명 중심의 사이트입니다.</p>
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
          <label className="mb-2 block text-[12px] text-[#3152B7] font-semibold">나이</label>
          <input
            className="h-12 w-full rounded-md border px-4"
            value={age}
            onChange={(e) => setAge(e.target.value.replace(/[^\d]/g, ""))}
            inputMode="numeric"
            placeholder="나이(숫자)"
          />
          {!isAgeValid && age.trim() !== "" && (
            <p className="mt-1 text-xs text-red-600">유효한 나이를 입력하세요.</p>
          )}
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
