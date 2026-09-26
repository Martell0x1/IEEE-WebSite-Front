import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Lock, Play, X } from "lucide-react";
import { challenges } from "../../data/challengesData";

const ChallengesDetails = () => {
  const { id } = useParams();
  const challenge = challenges.find((item) => item.id === Number(id));
  const [showAllPhases, setShowAllPhases] = useState(false);
  const [lockedPhase, setLockedPhase] = useState(null);
  if (!challenge) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-gray-400">Challenge not found.</p>
        <Link to="/challenges" className="text-[#F78400]!">Back to challenges</Link>
      </div>
    );
  }

  const doneCount = challenge.phasesList.filter((p) => p.status === "done").length;
  const totalCount = challenge.phasesList.length;
  const currentPhase = challenge.phasesList.find((p) => p.status === "current");
  const visiblePhases = showAllPhases ? challenge.phasesList : challenge.phasesList.slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link to="/challenges" className="flex w-fit items-center gap-2 text-sm text-gray-400! no-underline!">
        <ArrowLeft size={16} /> Back to challenges
      </Link>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="h-40 w-full rounded-2xl object-cover sm:w-56"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{challenge.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">{challenge.description}</p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-[#0f0f10] p-3">
              <p className="text-[10px] uppercase text-gray-500">Phases</p>
              <p className="mt-1 text-sm font-semibold text-white">{challenge.phases} Modules</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f10] p-3">
              <p className="text-[10px] uppercase text-gray-500">Builders</p>
              <p className="mt-1 text-sm font-semibold text-white">{challenge.builders} Active</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f10] p-3">
              <p className="text-[10px] uppercase text-gray-500">Difficulty</p>
              <p className="mt-1 text-sm font-semibold text-[#FFC687]">{challenge.difficulty}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f10] p-3">
              <p className="text-[10px] uppercase text-gray-500">Timeline</p>
              <p className="mt-1 text-sm font-semibold text-white">{challenge.timeline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-[#0f0f10] p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-white">Progress</span>
          <span className="text-gray-400">{doneCount} / {totalCount}</span>
        </div>

        <div className="mt-3 h-1.5 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#F78400]"
            style={{ width: `${(doneCount / totalCount) * 100}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-gray-400">
          Next: Phase {currentPhase?.id} — {currentPhase?.title}
        </p>

        <button className="mt-4 w-full rounded-lg border-0! bg-[#F78400]! py-2.5 text-sm font-semibold text-white!">
          Resume Building →
        </button>
      </div>

      <h2 className="mt-10 text-xl font-bold text-white">Phases</h2>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        {visiblePhases.map((phase, index) => (
          <div
            key={phase.id}
            className={`flex items-center gap-3 px-4 py-3 ${
              phase.status === "current"
                ? "rounded-2xl border border-[#F78400] bg-[#1a1410]"
                : "bg-[#0f0f10]"
            } ${index !== 0 && phase.status !== "current" ? "border-t border-white/10" : ""}`}
          >
            {phase.status === "done" && (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E]">
                <Check size={13} className="text-white" strokeWidth={3} />
              </span>
            )}
            {phase.status === "current" && (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F78400]">
                <Play size={11} className="fill-white text-white" />
              </span>
            )}
            {phase.status === "locked" && (
            <button onClick={() => setLockedPhase(phase)} className="shrink-0">
             <Lock size={16} className="text-gray-600" />
             </button>
            )}

            <span className={`text-sm ${phase.status === "locked" ? "text-gray-600" : "text-gray-400"}`}>
              Phase {phase.id}
            </span>
                <div className="ml-auto">
              {phase.status === "done" && (
                <button className="rounded-lg! border! border-white/15! bg-transparent! px-4! py-1.5! text-xs font-semibold text-gray-300!">
                  Review
                </button>
              )}
              {phase.status === "current" && (
                <button className="rounded-lg! border-0! bg-[#F78400]! px-5! py-1.5! text-xs font-semibold text-white!">
                  Continue
                </button>
              )}
              {phase.status === "locked" && (
                <button
                  onClick={() => setLockedPhase(phase)}
                  className="text-xs text-gray-600!"
                >
                  Locked
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalCount > 4 && (
        <button
          onClick={() => setShowAllPhases((prev) => !prev)}
          className="mt-3 rounded-lg border-0! bg-transparent! py-2 text-xs font-semibold text-gray-400!"
        >
          {showAllPhases ? "Show less" : `${totalCount - 4} more phases`}
        </button>
      )}

      <h2 className="mt-10 text-xl font-bold text-white">Skills Gained</h2>

      <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-[#0f0f10] p-4">
        {challenge.skills?.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
                  <h2 className="mt-10 text-xl font-bold text-white">Recent Attempts</h2>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f10]">
        <div className="grid grid-cols-3 px-4 py-2 text-[11px] uppercase text-gray-500">
          <span>Date</span>
          <span>Status</span>
          <span>Score</span>
        </div>

        {challenge.attempts?.map((attempt, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 px-4 py-2.5 text-sm ${index !== 0 ? "border-t border-white/10" : ""}`}
          >
            <span className="text-gray-300">{attempt.date}</span>
            <span className={attempt.status === "Passed" ? "text-[#F78400]" : "text-red-400"}>
              {attempt.status}
            </span>
            <span className="text-white">{attempt.score}</span>
          </div>
        ))}
      </div>

      {lockedPhase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0f0f10] p-6 text-center">
            <button
              onClick={() => setLockedPhase(null)}
              className="absolute right-4 top-4 text-gray-500"
            >
              <X size={16} />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-gray-400">
              <Lock size={22} />
            </div>

            <h2 className="mt-4 text-lg font-bold text-white">Previous Steps Incomplete!</h2>
            <p className="mt-2 text-xs text-gray-400">
              This phase depends on earlier phases you haven't completed yet. Finish the current phase first to unlock this one.
            </p>

            <div className="mt-4 flex items-center gap-3 rounded-xl bg-black/40 p-3 text-left">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F78400]">
                <Play size={13} className="fill-white text-white" />
              </span>
              <div>
                <p className="text-[10px] uppercase text-gray-500">Current Phase</p>
                <p className="text-sm font-semibold text-[#F78400]">
                  Phase {currentPhase?.id} — {currentPhase?.title}
                </p>
              </div>
            </div>

            <button className="mt-4 w-full rounded-lg! border-0! bg-[#F78400]! py-2.5! text-sm font-semibold text-white!">
              View Current Stage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengesDetails;