import React from "react";

const SignupPage = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 flex items-center justify-center bg-green-600 text-white">
        <h1 className="text-5xl font-bold">서비스 이름</h1>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-1/2 relative flex flex-col items-center justify-center bg-white">
        {/* 로그인 버튼 영역 */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row">
            <button className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
              고등학생
            </button>
            <button className="px-4 py-2 bg-green-600 text-black rounded hover:bg-green-700">
              대학생
            </button>
          </div>
          <span>이름</span>
          <input className="border" />
          <span>아이디(이메일)</span>
          <input className="border" />
          <span>사용가능/불가능</span>
          <span>비밀번호</span>
          <input className="border" />
          <span>비밀번호 확인</span>
          <input className="border" />
          <button className="pointer-cursor">회원가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
