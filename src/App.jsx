import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentSignup from "./pages/StudentSignup";
import TeacherSignup from "./pages/TeacherSignup";
import Question from './pages/Question';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teachersignup" element={<TeacherSignup />} />
          <Route path="/studentsignup" element={<StudentSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
