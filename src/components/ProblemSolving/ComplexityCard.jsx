const ComplexityCard = ({ title, notation, description }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-[#FF8C00]/40">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <span className="rounded-lg bg-[#FF8C00]/10 px-3 py-1 text-sm font-bold text-[#FF8C00]">
          {notation}
        </span>
      </div>

      <p className="text-sm leading-6 text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ComplexityCard;