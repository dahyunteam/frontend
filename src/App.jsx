// src/App.jsx
import React from "react";
import {
  BrowserRouter, // 해시(#)를 쓰고 있으면 HashRouter로 바꿔도 됨
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentSignup from "./pages/StudentSignup";
import TeacherSignup from "./pages/TeacherSignup";

import Question from "./pages/Question";
import MyPageStud from "./pages/MyPageStud";
import MyPageUniv from "./pages/MyPageUniv";
import MentorList from "./pages/MentorList";

import SelectedMentors from "./pages/SelectedMentors";
// import Chat from "./pages/Chat";            // 필요 시
// import Profile from "./pages/Profile";      // 필요 시
import Question from './pages/Question';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import QuestionMajor from './pages/QuestionMajor';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 레이아웃 라우트 (MainLayout 안에 <Outlet /> 반드시 있어야 함) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* 인증/회원가입 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teachersignup" element={<TeacherSignup />} />
          <Route path="/studentsignup" element={<StudentSignup />} />
          <Route path="/mypagestud" element={<MyPageStud />} />
          <Route path="/mypageuniv" element={<MyPageUniv />} />

          {/* 기능 페이지들 */}

          <Route
            caseSensitive={false}
            path="/question"
            element={<Question />}
          />
          <Route
            caseSensitive={false}
            path="/mentor-list"
            element={<MentorList />}
          />
          <Route
            caseSensitive={false}
            path="/my-mentors"
            element={<SelectedMentors />}
          />

          <Route caseSensitive={false} path="/question/1" element={<Question />} />
          <Route path="/question/1" element={<Question />} />
          <Route path="/question/2" element={<Question2 />} />
          <Route path="/question/3" element={<Question3 />} />
          <Route path="/question/4" element={<Question4 />} />
          <Route path="/question/major" element={<QuestionMajor />} />
          <Route caseSensitive={false} path="/mentor-list" element={<MentorList />} />
          <Route caseSensitive={false} path="/my-mentors" element={<SelectedMentors />} />

          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="/me" element={<Profile />} /> */}
        </Route>

        {/* 잘못된 경로는 홈으로 */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}
