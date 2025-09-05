// 간단한 localStorage 헬퍼: 회원가입 1단계 정보 임시 저장/삭제

const KEY = "signup_base";

export function saveSignupBase(base) {
  // base: { userType: "menti"|"mento", name, account, password }
  localStorage.setItem(KEY, JSON.stringify(base));
}

export function loadSignupBase() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSignupBase() {
  localStorage.removeItem(KEY);
}
