// src/App.jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// 메인/일반 페이지들 (Navbar 포함)
import Home from "./pages/Home";
import Question from "./pages/Question";
import MentorList from "./pages/MentorList";
import SelectedMentors from "./pages/SelectedMentors";
import ChatPage from "./pages/ChatPage";

// 로그인 플로우 (풀스크린)
import LoginChoice from "./pages/LoginChoice";
import LoginStudent from "./pages/LoginStudent";
import LoginTeacher from "./pages/LoginTeacher";

// 회원가입 (풀스크린 유지 권장)
import Signup from "./pages/Signup";
import StudentSignup from "./pages/StudentSignup";
import TeacherSignup from "./pages/TeacherSignup";

// 선생님 홈 (로그인 후 이동)
import TeacherHome from "./pages/TeacherHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* -------- 풀스크린 라우트 (Navbar 없이) -------- */}
        <Route path="/login" element={<LoginChoice />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/login/teacher" element={<LoginTeacher />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/teachersignup" element={<TeacherSignup />} />
        <Route path="/teacher-home" element={<TeacherHome />} />

        {/* -------- 레이아웃 라우트 (Navbar 포함) -------- */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route caseSensitive={false} path="/question" element={<Question />} />
          <Route caseSensitive={false} path="/mentor-list" element={<MentorList />} />
          <Route caseSensitive={false} path="/my-mentors" element={<SelectedMentors />} />
          <Route path="/chat" element={<ChatPage />} />
          {/* 필요 시: <Route path="/me" element={<Profile />} /> */}
        </Route>

        {/* -------- Fallback -------- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
