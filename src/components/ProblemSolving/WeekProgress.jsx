import React from "react";
import { BookOpen, Clock3, FileQuestion } from "lucide-react";

import { weekData } from "../data/problemSolvingData";

const WeekProgress = ({ weekId }) => {
  const week = weekData[weekId] || weekData[1];

  const stats = [
    {
      label: "Problems",
      value: week.problems,
      icon: FileQuestion,
    },
    {
      label: "Tutorials",
      value: week.tutorials,
      icon: BookOpen,
    },
    {
      label: "Hours",
      value: week.hours,
      icon: Clock3,
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-black/30 p-5"
            >
              <Icon className="mb-3 text-[#FF8C00]" size={22} />

              <p className="text-2xl font-bold">{stat.value}</p>

              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-gray-400">Progress</span>

          <span className="font-semibold text-[#FF8C00]">
            {week.progress}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#FF8C00] transition-all"
            style={{ width: `${week.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default WeekProgress;