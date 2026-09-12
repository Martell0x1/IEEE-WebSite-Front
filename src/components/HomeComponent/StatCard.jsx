import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StatCard = ({
  title,
  value,
  subtitle,
  position,
  Icon,
  isCode,
  delay,
  to,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className={`absolute ${position} z-20`}
  >
    <Link
      to={to || "#"}
      className="flex items-center gap-3 bg-black/80 border border-amber-500/30 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-2xl hover:border-amber-500/70 transition group"
    >
      <div className="text-left">
        <span className="text-[10px] tracking-widest text-[#FF8C00] font-bold block mb-0.5">
          {title}
        </span>
        {isCode ? (
          <div className="font-mono text-xs text-gray-300 leading-tight">
            <p>{value}</p>
            <p className="text-[#FF8C00]">{subtitle}</p>
          </div>
        ) : (
          <>
            <p className="text-base font-bold text-white leading-none">
              {value}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">{subtitle}</p>
          </>
        )}
      </div>

      <div className="text-[#FF8C00] bg-amber-500/10 p-2 rounded-lg border border-amber-500/20 group-hover:bg-[#FF8C00] group-hover:text-white transition-colors duration-300">
        <Icon className="w-4 h-4" />
      </div>
    </Link>
  </motion.div>
);

export default StatCard;