import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 flex items-center justify-center bg-green-600 text-white">
        <h1 className="text-5xl font-bold">서비스 이름</h1>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-1/2 relative flex flex-col items-center justify-center bg-white">
        {/* 오른쪽 상단 버튼 */}
        <div className="absolute top-6 right-6 space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
            문의하기
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-green-600 text-black rounded hover:bg-green-700"
          >
            회원가입하기
          </button>
        </div>

        {/* 로그인 버튼 영역 */}
        <div className="flex flex-row space-y-4">
          <button className="px-6 py-3 bg-green-600 text-black rounded-lg shadow hover:bg-green-700">
            선생님으로 로그인
          </button>
          <button className="px-6 py-3 bg-blue-600 text-black rounded-lg shadow hover:bg-blue-700">
            학생으로 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
