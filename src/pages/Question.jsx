import { useState } from "react";

export default function Question() {
    const [selectedOption, setSelectedOption] = useState(null); // 선택한 버튼 상태
    const options = ["문과", "이과", "예체능"];

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
        <aside className="w-[465px] h-[797px] shadow-[4px_4px_10px_rgba(0,0,0,0.15)] overflow-visible bg-white p-8 flex flex-col justify-around">
          <div className="space-y-4">
            <p className='text-black text-[18px] font-semibold'>질문 순서</p>
            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#3152B7] rounded-lg shadow-sm bg-blue-50">
                <div className="w-4 h-4 mt-1 bg-blue-600 rounded-full" />
                <div>
                  <p className="font-semibold text-lg text-[#191919]">나와 어울리는 분야는?</p>
                  <p className="font-normal text-sm text-[#565656] text-center">나와 어울리는 분야를 선택해요</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#DEDEDE] rounded-lg shadow-sm bg-white">
                <div className="w-4 h-4 mt-1 border border-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-lg text-[#8C8C8C]">내가 좋아하는 과목은?</p>
                  <p className="font-normal text-sm text-[#8C8C8C] text-center">과목 선택으로 더 구체화해요</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#DEDEDE] rounded-lg shadow-sm bg-white">
                <div className="w-4 h-4 mt-1 border border-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-lg text-[#8C8C8C]">나의 성장기</p>
                  <p className="font-normal text-sm text-[#8C8C8C] text-center">현재 나는 어떤 상태인지 확인해요</p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#DEDEDE] rounded-lg shadow-sm bg-white">
                <div className="w-4 h-4 mt-1 border border-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-lg text-[#8C8C8C]">내가 좋아하는 공부</p>
                  <p className="font-normal text-sm text-[#8C8C8C] text-center">구체적인 성향을 확인해요</p>
                </div>
              </div>
              {/* Step 5 */}
              <div className="flex items-center py-6 px-10 gap-8 space-x-3 p-4 border border-[#DEDEDE] rounded-lg shadow-sm bg-white">
                <div className="w-4 h-4 mt-1 border border-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-lg text-[#8C8C8C]">관심학과 선택하기</p>
                  <p className="font-normal text-sm text-[#8C8C8C] text-center">마지막으로 학과 선택하기</p>
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
          <h2 className="text-[24px] font-semibold mb-2 text-[#191919]">Q1. 나와 어울리는 분야는?</h2>
          <p className="text-xs text-gray-500 mb-12 text-[#565656]">해당 질문에 대한 답변으로 앞으로의 질문과 분야가 달라져요</p>
          <div className="space-y-4">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(option)}
                className={`
                  appearance-none w-full h-[56px] flex items-center gap-[10px] px-[18px] py-4 rounded-lg border font-semibold
                  ${selectedOption === option 
                    ? "bg-[#00207F] text-white border-[#00207F]" 
                    : "bg-white text-[#191919] border-[#DEDEDE]"
                  }
                `}
              >
                {idx + 1}. {option}
              </button>
            ))}
          </div>
          <button
            disabled={!selectedOption}
            className={`
              appearance-none mt-8 w-full h-[56px] flex items-center justify-center gap-[10px] px-[18px] py-4 rounded-lg font-semibold
              ${selectedOption 
                ? "bg-[#3152B7] text-white border-[#3152B7]" 
                : "bg-gray-300 text-gray-500 border-[#DEDEDE] cursor-not-allowed"
              }
            `}
          >
            다음
          </button>
        </section>
      </main>
    </div>
  );
}
