import { Lock } from "lucide-react";

const statusStyles = {
  completed: {
    badge: "bg-emerald-500/15 text-emerald-400",
    icon: "bg-emerald-500/15 text-emerald-400",
    bar: "bg-emerald-500",
    button:
      "border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white",
  },
  active: {
    badge: "bg-[#FF8C00]/15 text-[#FF8C00]",
    icon: "bg-[#FF8C00]/15 text-[#FF8C00]",
    bar: "bg-[#FF8C00]",
    button:
      "bg-[#FF8C00] hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20",
  },
  locked: {
    badge: "bg-white/5 text-gray-500",
    icon: "bg-white/5 text-gray-500",
    bar: "bg-white/20",
    button: "",
  },
};

const WeekCard = ({ week }) => {
  const styles = statusStyles[week.status];
  const percent = week.problems
    ? Math.round((week.solved / week.problems) * 100)
    : 0;
  const Icon = week.Icon;

  return (
    <article className="flex flex-col bg-[#111113] border border-white/8 rounded-2xl p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${styles.icon}`}
        >
          {week.status === "locked" ? (
            <Lock className="w-5 h-5" />
          ) : week.glyph ? (
            <span className="font-mono text-xs font-bold">{week.glyph}</span>
          ) : (
            <Icon className="w-5 h-5" />
          )}
        </div>
        <span
          className={`text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full capitalize ${styles.badge}`}
        >
          {week.status}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-1">{week.title}</h3>
      <p className="text-xs text-gray-500 mb-3">Week {week.week}</p>
      <p className="text-sm text-gray-400 leading-relaxed mb-4 grow">
        {week.description}
      </p>

      <p className="text-xs text-gray-500 mb-2">{week.problems} problems</p>
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className={`h-full rounded-full ${styles.bar}`}
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[11px] text-gray-500 whitespace-nowrap">
          {week.status === "active" && week.solved === 0
            ? "0%"
            : `${week.solved}/${week.problems}`}
        </span>
      </div>

      {week.status === "locked" ? (
        <p className="text-xs text-gray-500">
          Complete week {week.unlockAfter} to unlock
        </p>
      ) : (
        <button
          type="button"
          className={`w-full py-2.5 rounded-full text-sm font-semibold transition ${styles.button}`}
        >
          {week.status === "completed"
            ? "Review Week"
            : week.solved > 0
              ? "Continue"
              : "Start"}
        </button>
      )}
    </article>
  );
};

export default WeekCard;
