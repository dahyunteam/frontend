// src/lib/api.js
const BASE = import.meta.env.VITE_API_URL;

export async function postJSON(path, body, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    credentials: "include", // 세션/쿠키 쓰면 유지, 토큰이면 빼도 OK
    body: JSON.stringify(body),
    ...opts,
  });
  return res;
}
