import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [personToggle, setPersonToggle] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null); // null | true | false
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const navigate = useNavigate();

  // 이메일 형식 검사
  const isEmailFormatValid = email.includes("@") && email.includes(".com");

  // 중복 확인 (실제 API 호출 대신 임시 로직)
  const handleEmailCheck = () => {
    if (!isEmailFormatValid) {
      setEmailValid(false);
      setIsEmailChecked(true);
      return;
    }
    // 서버에서 중복 검사한다고 가정
    if (email === "test@example.com") {
      setEmailValid(false); // 이미 존재하는 이메일
    } else {
      setEmailValid(true);
    }
    setIsEmailChecked(true);
  };

  const handleSignup = () => {
    if (personToggle === "university") {
      navigate("/teachersignup");
    } else if (personToggle === "highschool") {
      navigate("/studentsignup");
    }
  };

  // 회원가입 버튼 활성화 조건
  const isFormValid =
    personToggle &&
    name.trim() &&
    email.trim() &&
    isEmailFormatValid &&
    isEmailChecked &&
    emailValid &&
    password &&
    confirmPassword &&
    password === confirmPassword;

  return (
    <div className="flex h-screen w-screen">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 flex items-center justify-center bg-green-600 text-white">
        <h1 className="text-5xl font-bold">서비스 이름</h1>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-1/2 relative flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col space-y-4 w-2/3">
          {/* 대학생/고등학생 선택 */}
          <div className="flex flex-row space-x-2">
            <button
              className={`flex-1 px-2 py-1 cursor-pointer text-sm rounded-lg border ${
                personToggle === "highschool"
                  ? "bg-[#1aa752] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setPersonToggle("highschool")}
            >
              고등학생
            </button>
            <button
              className={`flex-1 px-2 py-1 cursor-pointer text-sm rounded-lg border ${
                personToggle === "university"
                  ? "bg-[#1aa752] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setPersonToggle("university")}
            >
              대학생
            </button>
          </div>

          {/* 이름 */}
          <span>이름</span>
          <input
            className="border px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 이메일 */}
          <span>아이디(이메일)</span>
          <div className="flex space-x-2">
            <input
              className="border flex-1 px-2 py-1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailChecked(false); // 새 입력 → 다시 체크 필요
              }}
            />
            <button
              type="button"
              className="px-2 py-1 bg-blue-500 text-white rounded"
              onClick={handleEmailCheck}
            >
              중복 확인
            </button>
          </div>

          {/* 이메일 중복 확인 결과 */}
          {isEmailChecked && (
            <span
              className={`text-sm ${
                emailValid ? "text-green-600" : "text-red-600"
              }`}
            >
              {emailValid ? "사용 가능" : "사용 불가능"}
            </span>
          )}

          {/* 비밀번호 */}
          <span>비밀번호</span>
          <input
            type="password"
            className="border px-2 py-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 비밀번호 확인 */}
          <span>비밀번호 확인</span>
          <input
            type="password"
            className="border px-2 py-1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* 회원가입 버튼 */}
          <button
            onClick={handleSignup}
            disabled={!isFormValid}
            className={`px-4 py-2 rounded ${
              isFormValid
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            회원가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
