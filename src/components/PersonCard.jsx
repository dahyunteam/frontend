import React from "react";
import profile from "../assets/profile.svg";

const PersonCard = ({ person }) => {
  return (
    <div className="flex flex-col items-center w-[283px] h-[244px] p-8 gap-2 rounded-[16px] border border-gray-300 bg-white shadow-[2px_4px_4px_0_rgba(0,0,0,0.15)]">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-2">
        <img src={profile} alt="프로필 사진" className="w-8 h-8" />
      </div>

      <p className="font-semibold text-sm">{person.name}</p>
      <p className="text-xs text-gray-500">{person.school}</p>

      <div className="flex gap-2 mt-3">
        <button className="flex justify-center cursor-pointer items-center gap-2 px-4 py-2 rounded-[8px] bg-blue-800 text-white text-xs hover:bg-blue-900">
          오픈채팅하기
        </button>
        <button className="flex justify-center cursor-pointer items-center gap-2 px-4 py-2 rounded-[8px] border border-gray-300 bg-blue-50 text-gray-700 text-xs hover:bg-blue-100">
          상담하기
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
