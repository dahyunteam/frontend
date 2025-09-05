import React from "react";

const TeacherSignupPage = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 flex items-center justify-center bg-green-600 text-white">
        <h1 className="text-5xl font-bold">서비스 이름</h1>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-1/2 relative flex flex-col items-center justify-center bg-white">
        <h1>고다현님</h1>
        <h1>반갑습니다!</h1>
        <span>우리 사이트는 별명으로 운영되며</span>
        <span>학과 인증을 필수로 운영하고 있습니다</span>
        {/* 로그인 버튼 영역 */}
        <div className="flex flex-col space-y-4">
          <span>별명</span>
          <input className="border" />
          <span>학교 이름</span>
          <input className="border" />
          <span>과</span>
          <input className="border" />
          <span>오픈 채팅방</span>
          <input className="border" />
        </div>
      </div>
    </div>
  );
};

export default TeacherSignupPage;
