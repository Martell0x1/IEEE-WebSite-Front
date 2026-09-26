import { useState } from "react";
import { ChevronLeft, Link, GitBranch, GitPullRequest, Clock, Zap, CheckCircle, Trophy, X } from "lucide-react";
import { leaderboard } from "../../data/leaderboardData";
const SubmitSolution = () => {
  const [showModal, setShowModal] = useState(false);
    return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <a href="#" className="flex items-center gap-1 text-sm text-gray-400">
        <ChevronLeft size={14} /> Back to Project
      </a>

      <h1 className="mt-4 text-4xl font-bold text-white">Submit Solution</h1>
      <p className="mt-2 text-sm text-gray-400">
        Your repository will be cloned and evaluated automatically. Results appear within minutes.
      </p>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#0f0f10] p-4">
            <label className="text-xs text-gray-400">GitHub Repository URL</label>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-black px-3 py-2.5">
             <Link size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="https://github.com/username/project"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0f0f10] p-4">
            <label className="text-xs text-gray-400">Branch (optional)</label>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-black px-3 py-2.5">
              <GitBranch size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="main"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
          </div>

          <button 
            onClick={() => setShowModal(true)}
          className="rounded-lg! border-0! bg-[#F78400]! py-3! text-sm font-semibold text-white!">
            Submit Solution →
          </button>

          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0f0f10] p-4">
          <h3 className="text-sm font-bold text-white">How Evaluation Works</h3>
          <ul className="mt-3 flex flex-col gap-3">
          <li className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F78400]/10 text-[#F78400]">
         <GitPullRequest size={12} />
      </span>
      Your repository is cloned automatically
    </li>
    <li className="flex items-center gap-3 text-xs text-gray-400">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F78400]/10 text-[#F78400]">
        <Clock size={12} />
      </span>
      Estimated evaluation time: 2-5 minutes
    </li>
    <li className="flex items-center gap-3 text-xs text-gray-400">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F78400]/10 text-[#F78400]">
        <Zap size={12} />
      </span>
      All test cases run without any manual steps
    </li>
    <li className="flex items-center gap-3 text-xs text-gray-400">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F78400]/10 text-[#F78400]">
        <CheckCircle size={12} />
      </span>
      Results appear immediately after completion
    </li>
  </ul>
</div>
        </div>

    
        <div className="rounded-2xl border border-white/10 bg-[#0f0f10] p-4">
  <h3 className="flex items-center gap-2 text-sm font-bold text-[#F78400]">
    <Trophy size={14} /> Leaderboard
  </h3>

  <ul className="mt-4 flex flex-col gap-1">
    {leaderboard.map((user) => (
      <li
        key={user.rank}
        className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm ${
          user.isMe ? "bg-[#F78400]/10 text-[#F78400]" : "text-gray-300"
        }`}
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">
          {user.name.slice(0, 2).toUpperCase()}
        </span>
        <span className="flex-1 truncate">{user.name}</span>
        <span className="text-xs text-gray-500">#{user.rank}</span>
      </li>
    ))}
  </ul>
</div>
      </div>

            {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0f0f10] p-6 text-center">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500"
            >
              <X size={16} />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F78400]/10 text-[#F78400]">
              <Trophy size={24} />
            </div>

            <h2 className="mt-4 text-lg font-bold text-white">Stage Complete!</h2>
            <p className="mt-2 text-xs text-gray-400">
              You've successfully passed this phase.
            </p>

            <div className="mt-4 rounded-xl bg-black/40 p-3">
              <p className="text-[11px] text-gray-500">Your leaderboard rank</p>
              <p className="mt-1 text-2xl font-bold text-[#F78400]">#4,441</p>
              <p className="text-[11px] text-gray-500">among all participants</p>
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

export default SubmitSolution;