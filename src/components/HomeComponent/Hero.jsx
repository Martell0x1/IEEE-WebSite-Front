import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/background.png";
import heroLogo from "../../assets/images/hero-logo.png";
import MobileStatCard from "./MobileStatCard";
import StatCard from "./StatCard";

import {
  ClipboardList,
  Calendar,
  Code,
  ShieldCheck,
  BrainCircuit,
  Trophy,
} from "lucide-react";
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 px-4 sm:px-8 md:px-12 flex items-center min-h-[calc(100vh-80px)] bg-[#09090b] text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-150 h-87.5 sm:h-150 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        <motion.div
          className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight drop-shadow-md">
              Build Real Skills <br className="hidden sm:inline" />
              Through Real <br className="hidden sm:inline" />
              <span className="text-[#FF8C00]">Projects.</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Learn Software Engineering, Cyber Security, AI, IoT, and more by
              building production-inspired systems from scratch.
            </p>
          </div>
          <div className="border-l-2 border-[#FF8C00] pl-4 py-1 text-xs sm:text-sm text-gray-200 font-medium space-y-1 text-left max-w-md mx-auto lg:mx-0 bg-black/40 backdrop-blur-sm rounded-r-md">
            <p>Students don't watch tutorials.</p>
            <p className="text-white font-semibold">
              Students learn by building.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/challenges"
                className="block w-full sm:w-auto bg-[#FF8C00] hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-orange-500/30 transition text-center"
              >
                Start Building
              </Link>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/projects"
                className="block w-full sm:w-auto border border-white/20 hover:border-white/50 bg-black/40 text-[#E0E0E0] font-semibold px-7 py-3 rounded-full transition backdrop-blur-md text-center"
              >
                Explore Projects
              </Link>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-7 relative min-h-105 sm:min-h-137.5 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[320px] sm:max-w-110 flex justify-center"
          >
            <img
              src={heroLogo}
              alt="IEEE Glowing Centerpiece"
              className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(255,140,0,0.4)] rounded-2xl"
            />
          </motion.div>
          <div className="hidden sm:block">
            <StatCard
              title="PROJECTS"
              value="150+"
              subtitle="Active Projects"
              position="top-[2%] left-[4%] md:left-[8%]"
              Icon={ClipboardList}
              delay={0.3}
              to="/projects"
            />
            <StatCard
              title="SEMINARS"
              value="50+"
              subtitle="Sessions"
              position="top-[38%] left-[-2%] md:left-[2%]"
              Icon={Calendar}
              delay={0.4}
              to="/seminars"
            />
            <StatCard
              title="CODE"
              value="while(true) {"
              subtitle="optimize() }"
              position="bottom-[2%] left-[6%] md:left-[10%]"
              Icon={Code}
              isCode
              delay={0.5}
              to="/seminars"
            />
            <StatCard
              title="CYBER SECURITY"
              value="150+"
              subtitle="Active Projects"
              position="top-[5%] right-[2%] md:right-[6%]"
              Icon={ShieldCheck}
              delay={0.6}
              to="/cyberSecurity"
            />
            <StatCard
              title="AI & ML"
              value="150+"
              subtitle="Active Projects"
              position="top-[42%] right-[-2%] md:right-[0%]"
              Icon={BrainCircuit}
              delay={0.7}
              to="/challenges"
            />
            <StatCard
              title="PROBLEM SOLVING"
              value="100+"
              subtitle="Challenges"
              position="bottom-[4%] right-[2%] md:right-[4%]"
              Icon={Trophy}
              delay={0.8}
              to="/problem-solving"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 w-full mt-6 sm:hidden">
            <MobileStatCard
              title="PROJECTS"
              value="150+"
              subtitle="Active Projects"
              Icon={ClipboardList}
              to="/projects"
            />
            <MobileStatCard
              title="SEMINARS"
              value="50+"
              subtitle="Sessions"
              Icon={Calendar}
              to="/seminars"
            />
            <MobileStatCard
              title="CYBER SECURITY"
              value="150+"
              subtitle="Active Projects"
              Icon={ShieldCheck}
              to="/cyberSecurity"
            />
            <MobileStatCard
              title="AI & ML"
              value="150+"
              subtitle="Active Projects"
              Icon={BrainCircuit}
              to="/challenges"
            />
            <MobileStatCard
              title="PROBLEM SOLVING"
              value="100+"
              subtitle="Challenges"
              Icon={Trophy}
              to="/problem-solving"
            />
            <MobileStatCard
              title="CODE"
              value="while(true)"
              subtitle="optimize()"
              Icon={Code}
              to="/seminars"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
