import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { weekData } from "../data/problemSolvingData";

const WeekHeader = ({ weekId }) => {
  const navigate = useNavigate();

  const week = weekData[weekId] || weekData[1];

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate("/problem-solving")}
        className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Problem Solving
      </button>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF8C00]">
          Week {week.weekNumber}
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {week.title}
        </h1>

        <p className="mt-4 max-w-3xl text-gray-400">
          {week.description}
        </p>
      </div>
    </div>
  );
};

export default WeekHeader;