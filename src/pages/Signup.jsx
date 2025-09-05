import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [personToggle, setPersonToggle] = useState(null); // "highschool" | "university"
  const [name, setName] = useState("");

  // ✅ account로 통일
  const [account, setAccount] = useState("");
  const [accountValid, setAccountValid] = useState(null); // null | true | false
  const [isAccountChecked, setIsAccountChecked] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // 계정(이메일) 형식 체크
  const isAccountFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(account);

  // 중복 확인 (임시 로직)
  const handleAccountCheck = () => {
    if (!isAccountFormatValid) {
      setAccountValid(false);
      setIsAccountChecked(true);
      return;
    }
    // 서버 중복 검사 가정
    if (account === "test@example.com") {
      setAccountValid(false);
    } else {
      setAccountValid(true);
    }
    setIsAccountChecked(true);
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
    account.trim() &&
    isAccountFormatValid &&
    isAccountChecked &&
    accountValid &&
    password &&
    confirmPassword &&
    password === confirmPassword;

  return (
    <div className="flex h-screen w-screen">
      {/* 오른쪽 영역 */}
      <div className="w-1/2 relative flex flex-col items-center justify-center bg-white mx-auto">
        <div className="flex flex-col space-y-4 w-2/3">
          {/* 고등학생/대학생 선택 */}
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

          {/* 아이디(account) */}
          <span>아이디</span>
          <div className="flex space-x-2">
            <input
              className="border flex-1 px-2 py-1"
              value={account}
              onChange={(e) => {
                setAccount(e.target.value);
                setIsAccountChecked(false); // 새 입력 → 다시 체크 필요
                setAccountValid(null);
              }}
            />
            <button
              type="button"
              className="px-2 py-1 bg-blue-500 text-white rounded"
              onClick={handleAccountCheck}
            >
              중복 확인
            </button>
          </div>

          {/* 중복 확인 결과 */}
          {isAccountChecked && (
            <span
              className={`text-sm ${
                accountValid ? "text-green-600" : "text-red-600"
              }`}
            >
              {accountValid ? "사용 가능" : "사용 불가능"}
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
