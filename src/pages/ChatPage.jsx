import { useEffect, useRef, useState } from "react";

const ROOMS = [
  { id: 1, name: "고다현" },
  { id: 2, name: "김민준" },
  { id: 3, name: "박서연" },
];

const INIT_MSGS = [
  { id: 1, text: "반갑습니다 ~", sender: "other", time: "3:04 am" },
  { id: 2, text: "안녕하세요 ~~~~~~~", sender: "me", time: "3:05 am" },
];

export default function ChatPage() {
  const [rooms] = useState(ROOMS);
  const [activeRoom, setActiveRoom] = useState(ROOMS[0]);
  const [messages, setMessages] = useState(INIT_MSGS);
  const [input, setInput] = useState("");

  const scrollRef = useRef(null);

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), sender: "me", time: new Date().toLocaleTimeString() },
    ]);
    setInput("");
  };

  // 메시지 추가될 때마다 채팅창 맨 아래로
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-[#F3F6FD]">
      {/* Navbar 높이(56px)만큼 띄우기 + 화면 높이 고정 */}
      <div className="w-[1440px] mx-auto pt-0 h-screen overflow-hidden">
        <div className="flex h-[calc(100vh-56px)]">
          {/* 좌측 채팅 리스트 */}
          <aside className="w-[240px] bg-white border-r">
            <div className="px-6 py-4 font-semibold border-b">채팅 리스트</div>
            <div className="space-y-1 px-4 py-3">
              {rooms.map((r) => {
                const on = r.id === activeRoom.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setActiveRoom(r)}
                    className={`w-full text-left rounded-md px-4 py-2 ${
                      on ? "bg-[#E9EDF8] font-medium border border-[#D5DCF4]" : "hover:bg-neutral-50"
                    }`}
                  >
                    {r.name}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* 우측 채팅 영역 */}
          <section className="flex-1 flex flex-col overflow-hidden">
            {/* 메시지 영역 */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto bg-[#EAF1FF] px-12 py-8"
            >
              <div className="mx-auto max-w-[880px] space-y-10">
                {messages.map((m) => {
                  const mine = m.sender === "me";
                  return (
                    <div key={m.id} className={mine ? "text-right" : "text-left"}>
                      <div
                        className={`inline-block max-w-[680px] rounded-2xl px-6 py-5 text-[14px] leading-6 shadow-sm ${
                          mine ? "bg-[#4A66C9] text-white" : "bg-white border border-[#E5E7EB] text-[#191919]"
                        }`}
                      >
                        {m.text}
                      </div>
                      <div className={`mt-2 text-[11px] text-[#9CA3AF] ${mine ? "text-right" : "text-left"}`}>
                        {m.time}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 입력창 */}
            <div className="bg-[#EAF1FF] px-12 pb-8 pt-4">
              <div className="mx-auto max-w-[880px] rounded-2xl border border-[#E5E7EB] bg-white p-4">
                <div className="flex items-end gap-3">
                  <textarea
                    rows={3}
                    placeholder="채팅을 입력하세요"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
                    className="min-h-[72px] flex-1 resize-none outline-none text-[14px] leading-6 placeholder:text-[#9CA3AF]"
                  />
                  <button
                    onClick={send}
                    className="h-10 shrink-0 rounded-md bg-[#3152B7] px-4 text-white text-sm hover:bg-[#2643a0]"
                  >
                    전송하기
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
