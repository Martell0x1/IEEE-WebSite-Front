import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  CircleCheck,
  Lock,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import WeekCard from "../../components/ProblemSolving/WeekCard";

const WEEKS = [
  {
    id: 1,
    week: 1,
    title: "Complexity Analysis",
    description:
      "Learn how to analyze the efficiency of algorithms using Big O notation. Understand time and space complexities and solve.",
    problems: 15,
    solved: 10,
    status: "completed",
    glyph: "[ ]",
  },
  {
    id: 2,
    week: 2,
    title: "Complexity Analysis",
    description:
      "Learn how to analyze the efficiency of algorithms using Big O notation. Understand time and space complexities and solve.",
    problems: 12,
    solved: 0,
    status: "active",
    glyph: "O(n)",
  },
  {
    id: 3,
    week: 3,
    title: "Data Structures: Stacks & Queues",
    description:
      "Let's explore linear data structures like stacks and queues. Learn their applications and practice problems to strengthen your understanding.",
    problems: 16,
    solved: 0,
    status: "locked",
    unlockAfter: 2,
  },
  {
    id: 4,
    week: 3,
    title: "Data Structures: Stacks & Queues",
    description:
      "Let's explore linear data structures like stacks and queues. Learn their applications and practice problems to strengthen your understanding.",
    problems: 16,
    solved: 0,
    status: "locked",
    unlockAfter: 2,
  },
  {
    id: 5,
    week: 3,
    title: "Data Structures: Stacks & Queues",
    description:
      "Let's explore linear data structures like stacks and queues. Learn their applications and practice problems to strengthen your understanding.",
    problems: 16,
    solved: 0,
    status: "locked",
    unlockAfter: 2,
  },
  {
    id: 6,
    week: 3,
    title: "Data Structures: Stacks & Queues",
    description:
      "Let's explore linear data structures like stacks and queues. Learn their applications and practice problems to strengthen your understanding.",
    problems: 16,
    solved: 0,
    status: "locked",
    unlockAfter: 2,
  },
];

const STATS = [
  {
    label: "COMPLETED WEEKS",
    value: "2",
    hint: "of 8 total",
    Icon: CalendarCheck,
  },
  {
    label: "SOLVED PROBLEMS",
    value: "24",
    hint: "of 96 total",
    Icon: CircleCheck,
  },
  {
    label: "CURRENT WEEK",
    value: "Week 01",
    hint: "Complexity",
    Icon: Target,
  },
  {
    label: "OVERALL PROGRESS",
    value: "25%",
    hint: "Keep going",
    Icon: TrendingUp,
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
  { id: "locked", label: "Locked" },
];

const ProblemSolvingPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const weeks = useMemo(() => {
    const term = query.trim().toLowerCase();
    return WEEKS.filter((week) => {
      const matchesFilter = filter === "all" || week.status === filter;
      const matchesQuery =
        !term ||
        week.title.toLowerCase().includes(term) ||
        week.description.toLowerCase().includes(term) ||
        `week ${week.week}`.includes(term);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section className="px-4 sm:px-8 md:px-12 py-10 md:py-14">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Problem Solving
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl">
            Learn Algorithms & Data Structures through structured weekly
            sessions designed by IEEE mentors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map(({ label, value, hint, Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="bg-[#111113] border border-white/8 rounded-2xl p-4 sm:p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] tracking-widest text-gray-500 font-semibold">
                  {label}
                </span>
                <Icon className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white leading-none">
                {value}
              </p>
              <p className="text-xs text-gray-500 mt-2">{hint}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
          <label className="relative grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search challenges..."
              className="w-full bg-[#111113] border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#FF8C00]"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === item.id
                    ? "bg-[#FF8C00] text-white"
                    : "bg-[#111113] border border-white/10 text-gray-300 hover:border-white/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {weeks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {weeks.map((week, index) => (
              <motion.div
                key={week.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
              >
                <WeekCard week={week} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center bg-[#111113] border border-white/8 rounded-2xl">
            <Lock className="w-6 h-6 text-gray-600" />
            <p className="text-white font-semibold">No challenges found</p>
            <p className="text-sm text-gray-500">
              Try another search or filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProblemSolvingPage;
