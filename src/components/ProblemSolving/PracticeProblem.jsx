import React from "react";
import { Check, ExternalLink, Clock3 } from "lucide-react";
import { practiceProblems } from "../../data/problemSolvingData";

const PracticeProblem = () => {
  return (
     <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FF8C00]">
        Section 5
      </p>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">
            Practice Problems
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Test your understanding with these problems.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          1 / {practiceProblems.length} completed
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {practiceProblems.map((problem) => {
          const verified = problem.status === "verified";

          return (
            <div
              key={problem.id}
              className="flex flex-col gap-4 rounded-xl border border-white/10 bg-black/30 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 flex size-9 shrink-0 items-center justify-center rounded-full ${
                    verified
                      ? "bg-green-500/10 text-green-400"
                      : "bg-white/5 text-gray-500"
                  }`}
                >
                  {verified ? (
                    <Check size={18} />
                  ) : (
                    <Clock3 size={18} />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {problem.title}
                  </h3>

                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-500">
                    <span>{problem.platform}</span>

                    <span>•</span>

                    <span>{problem.difficulty}</span>
                  </div>
                </div>
              </div>

              <button
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  verified
                    ? "border border-green-500/30 text-green-400"
                    : "bg-[#FF8C00] text-white hover:bg-orange-600"
                }`}
              >
                {verified ? "Verified" : "Verify"}

                {!verified && <ExternalLink size={15} />}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
        <button className="rounded-full border border-white/10 px-6 py-3 text-sm text-gray-400 transition hover:border-white/20 hover:text-white">
          ← Previous Week
        </button>

        <button className="rounded-full bg-[#FF8C00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
          Continue to Next Week →
        </button>
      </div>
    </section>
  );
};

export default PracticeProblem;