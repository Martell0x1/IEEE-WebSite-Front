import React from "react";
import ComplexityCard from "./ComplexityCard";
import { complexityLevels } from "../../data/problemSolvingData";
const Big0Section = () => {
  return (
   <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FF8C00]">
        Section 2
      </p>

      <h2 className="mb-4 text-2xl font-bold">
        What is Big O?
      </h2>

      <p className="max-w-4xl leading-7 text-gray-400">
        Big O notation describes how the runtime or memory requirements of an
        algorithm grow as the input size increases.
      </p>

      {/* Growth comparison */}
      <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-5">
        <h3 className="mb-5 text-lg font-semibold">
          Growth Rate Comparison
        </h3>

        <div className="flex h-64 items-end gap-3 overflow-hidden rounded-lg border border-white/5 bg-black/40 p-4">
          {[15, 35, 65, 120, 190].map((height, index) => {
            const labels = [
              "O(1)",
              "O(log n)",
              "O(n)",
              "O(n log n)",
              "O(n²)",
            ];

            return (
              <div
                key={labels[index]}
                className="flex h-full flex-1 flex-col justify-end"
              >
                <div
                  className="rounded-t-md bg-[#FF8C00]/80"
                  style={{ height: `${height}px` }}
                />

                <p className="mt-3 text-center text-xs text-gray-400">
                  {labels[index]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complexity cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {complexityLevels.map((level) => (
          <ComplexityCard
            key={level.notation}
            title={level.title}
            notation={level.notation}
            description={level.description}
          />
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#FF8C00]/20 bg-[#FF8C00]/5 p-5">
        <p className="text-sm leading-6 text-gray-300">
          <span className="font-semibold text-[#FF8C00]">
            Remember:
          </span>{" "}
          Big O focuses on the growth rate of an algorithm rather than its
          exact execution time.
        </p>
      </div>
    </section>
  );
};

export default Big0Section;