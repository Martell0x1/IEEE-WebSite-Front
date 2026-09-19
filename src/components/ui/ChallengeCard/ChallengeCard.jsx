import { Clock, Layers } from "lucide-react";

const badgeStyles = {
  Easy: "bg-green-500/10 text-green-400",
  Medium: "bg-orange-500/10 text-orange-400",
  Hard: "bg-red-500/10 text-red-400",
};

const ChallengeCard = ({ title, description, difficulty, phases, hours, progress, image }) => {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0f0f10] p-3">
      <img
        src={image}
        alt={title}
        className="h-36 w-full rounded-xl object-cover"
      />

      <span className={`w-fit rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase ${badgeStyles[difficulty]}`}>
        {difficulty}
      </span>

      <h3 className="text-base font-bold text-white">{title}</h3>

      <p className="line-clamp-3 text-xs leading-relaxed text-gray-400">
        {description}
      </p>

      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <Layers size={12} /> {phases} Phases
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={12} /> ~{hours} hours
        </span>
      </div>

      <div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>Progress</span>
          <span className="font-semibold text-[#FF8C00]">{progress}%</span>
        </div>
        <div className="mt-1.5 h-1 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#FF8C00]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button className="w-full rounded-lg border-0! bg-[#FF8C00]! py-2 text-sm font-semibold text-white!">
        Start Challenge
      </button>
    </article>
  );
};

export default ChallengeCard;