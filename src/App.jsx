import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Navbar 없는 풀스크린
import LoginChoice from "./pages/LoginChoice";
import LoginStudent from "./pages/LoginStudent";
import LoginTeacher from "./pages/LoginTeacher";
import SignupChoice from "./pages/SignupChoice"; // 파일명 주의: SignupChoice.jsx
import StudentSignup from "./pages/StudentSignup";
import TeacherSignup from "./pages/TeacherSignup";
import TeacherHome from "./pages/TeacherHome";

// Navbar 포함 페이지
import Home from "./pages/Home";
import Question from "./pages/Question";
import MentorList from "./pages/MentorList";
import SelectedMentors from "./pages/SelectedMentors";
import ChatPage from "./pages/ChatPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 화면은 로그인 선택 */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 풀스크린 플로우 */}
        <Route path="/login" element={<LoginChoice />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/login/teacher" element={<LoginTeacher />} />
        <Route path="/signup" element={<SignupChoice />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/teachersignup" element={<TeacherSignup />} />
        <Route path="/teacher-home" element={<TeacherHome />} />

        {/* Navbar 포함 라우트 */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/mentor-list" element={<MentorList />} />
          <Route path="/my-mentors" element={<SelectedMentors />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
