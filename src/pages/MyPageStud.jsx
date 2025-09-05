import React from "react";
import PersonCard from "../components/PersonCard";
import profile from "../assets/profile.svg";

const students = [
  { name: "별명 가나다", school: "머머대학교 무슨무슨과" },
  { name: "별명 가나다", school: "머머대학교 무슨무슨과" },
  { name: "별명 가나다", school: "머머대학교 무슨무슨과" },
  { name: "별명 가나다", school: "머머대학교 무슨무슨과" },
];

const MyStudents = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* 상단 프로필 영역 */}
      <div className="flex items-center gap-4 mb-6">
        {/* 프로필 사진 */}
        <div className="flex items-center justify-center rounded-full bg-white w-18 h-18">
          <img
            src={profile}
            alt="프로필"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold">발명왕</p>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* 내 학생 영역 */}
      <h2 className="font-semibold mb-4">선택한 멘토</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {students.map((s, idx) => (
          <PersonCard key={idx} person={s} />
        ))}
      </div>
    </div>
  );
};

export default MyStudents;
