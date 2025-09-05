import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentSignup from "./pages/StudentSignup";
import TeacherSignup from "./pages/TeacherSignup";
import Question from './pages/Question';

export default function App() {
  return (
    <div className="w-[1440px] h-[1024px] mx-auto bg-slate-50 text-slate-900 overflow-hidden">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teachersignup" element={<TeacherSignup />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
