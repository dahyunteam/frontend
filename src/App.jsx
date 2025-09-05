// src/App.jsx
import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// ── Lazy pages (코드 스플리팅)
const Home = lazy(() => import("./pages/Home"));
const Question = lazy(() => import("./pages/Question"));
const MentorList = lazy(() => import("./pages/MentorList"));
const SelectedMentors = lazy(() => import("./pages/SelectedMentors"));
const ChatPage = lazy(() => import("./pages/ChatPage"));

const LoginChoice = lazy(() => import("./pages/LoginChoice"));
const LoginStudent = lazy(() => import("./pages/LoginStudent"));
const LoginTeacher = lazy(() => import("./pages/LoginTeacher"));
const SignupChoice = lazy(() => import("./pages/SignupChoice"));
const StudentSignup = lazy(() => import("./pages/StudentSignup"));
const TeacherSignup = lazy(() => import("./pages/TeacherSignup"));
const TeacherHome = lazy(() => import("./pages/TeacherHome"));

const MyPageStud = lazy(() => import("./pages/MyPageStud"));
const MyPageUniv = lazy(() => import("./pages/MyPageUniv"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
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
          {/* 최초 진입은 로그인 선택으로 */}
          <Route path="/" element={<Navigate to="/login" replace />} />

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
            <Route path="/home" element={<Home />} />
            <Route path="/question" element={<Question />} />
            <Route path="/mentor-list" element={<MentorList />} />
            <Route path="/my-mentors" element={<SelectedMentors />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/mypagestud" element={<MyPageStud />} />
            <Route path="/mypageuniv" element={<MyPageUniv />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
