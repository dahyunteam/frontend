// src/App.jsx
import React, { Suspense, lazy, useEffect } from "react";
import {

  BrowserRouter,

  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// 페이지들 lazy 로드
const Home = lazy(() => import("./pages/Home"));
const Question = lazy(() => import("./pages/Question"));
const MentorList = lazy(() => import("./pages/MentorList"));
const SelectedMentors = lazy(() => import("./pages/SelectedMentors"));
const ChatPage = lazy(() => import("./pages/ChatPage"));

// 로그인/회원가입 (풀스크린)
const LoginChoice = lazy(() => import("./pages/LoginChoice"));
const LoginStudent = lazy(() => import("./pages/LoginStudent"));
const LoginTeacher = lazy(() => import("./pages/LoginTeacher"));
const SignupChoice = lazy(() => import("./pages/SignupChoice"));
const StudentSignup = lazy(() => import("./pages/StudentSignup"));
const TeacherSignup = lazy(() => import("./pages/TeacherSignup"));

// 선생님 홈
const TeacherHome = lazy(() => import("./pages/TeacherHome"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "auto" });  }, [pathname]);
  return null;
}

function Fallback() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <span className="text-sm text-slate-500">불러오는 중…</span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Fallback />}>
        <Routes>
          {/* 풀스크린 (Navbar 없음) */}
          <Route path="/login" element={<LoginChoice />} />
          <Route path="/login/student" element={<LoginStudent />} />
          <Route path="/login/teacher" element={<LoginTeacher />} />

          <Route path="/signup" element={<SignupChoice />} />
          <Route path="/studentsignup" element={<StudentSignup />} />
          <Route path="/teachersignup" element={<TeacherSignup />} />

          <Route path="/teacher-home" element={<TeacherHome />} />

          {/* 레이아웃 (Navbar 포함) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route caseSensitive={false} path="/question" element={<Question />} />
            <Route caseSensitive={false} path="/mentor-list" element={<MentorList />} />
            <Route caseSensitive={false} path="/my-mentors" element={<SelectedMentors />} />
            <Route path="/chat" element={<ChatPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}
