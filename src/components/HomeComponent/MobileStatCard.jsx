import React from "react";
import { Link } from "react-router-dom";
const MobileStatCard = ({ title, value, subtitle, Icon, to }) => (
  <Link
    to={to || "#"}
    className="flex items-center justify-between bg-black/85 border border-amber-500/20 p-3 rounded-xl backdrop-blur-md"
  >
    <div className="text-left">
      <span className="text-[9px] tracking-wider text-[#FF8C00] font-bold block">
        {title}
      </span>
      <p className="text-sm font-bold text-white">{value}</p>
      <p className="text-[10px] text-gray-400">{subtitle}</p>
    </div>
    <div className="text-[#FF8C00] bg-amber-500/10 p-1.5 rounded-md">
      <Icon className="w-4 h-4" />
    </div>
  </Link>
);

export default MobileStatCard;
