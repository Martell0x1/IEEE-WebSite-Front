import { useState } from "react";
import { Search } from "lucide-react";
import ChallengeCard from "../../components/ui/ChallengeCard/ChallengeCard";
import { challenges } from "../../data/challengesData";

const filters = ["All", "Easy", "Medium", "Hard"];

const ChallengesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const visibleChallenges = challenges.filter(
  (challenge) =>
    (activeFilter === "All" || challenge.difficulty === activeFilter) &&
    (challenge.title + " " + challenge.difficulty)
      .toLowerCase()
      .includes(search.toLowerCase())
);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Challenges</h1>
      <p className="mt-2 text-sm text-gray-400">
        Build production-inspired systems and learn real engineering skills
        through hands-on projects.
      </p>

      <div className="my-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-[#0f0f10] px-4 py-2.5">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search challenges..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5! py-2! text-sm font-semibold ${activeFilter === filter
                  ? "bg-[#F78400]! text-white!"
                  : "bg-transparent! text-gray-400!"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

            {visibleChallenges.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} {...challenge} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-gray-400">
          No challenges match your search. Try a different word or filter.
        </p>
      )}
    </div>
  );
};

export default ChallengesPage;