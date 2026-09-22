import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, House } from "lucide-react";
import backgroundImage from "../../assets/images/background.webp";
import ieeeLogo from "../../assets/images/IEEE-Logo.webp";

const NotFoundPage = () => {
  return (
    <section
      className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 px-4 sm:px-8 md:px-12 flex items-center min-h-[calc(100vh-80px)] bg-[#09090b] text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-150 h-87.5 sm:h-150 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center">
            <img
              src={ieeeLogo}
              alt="IEEE Logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block text-[10px] sm:text-xs tracking-[0.2em] text-[#FF8C00] font-bold">
              ERROR 404
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight drop-shadow-md">
              Page not <span className="text-[#FF8C00]">found.</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              This route is not in the IEEE Excom map. Head back home or keep
              building through real projects.
            </p>
          </div>

          <div className="border-l-2 border-[#FF8C00] pl-4 py-1 text-xs sm:text-sm text-gray-200 font-medium space-y-1 text-left max-w-md mx-auto bg-black/40 backdrop-blur-sm rounded-r-md">
            <p>Students don&apos;t watch tutorials.</p>
            <p className="text-white font-semibold">
              Students learn by building.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#FF8C00] hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-orange-500/30 transition"
              >
                <House className="w-4 h-4" />
                Back Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-white/20 hover:border-white/50 bg-black/40 text-[#E0E0E0] font-semibold px-7 py-3 rounded-full transition backdrop-blur-md"
              >
                <Compass className="w-4 h-4" />
                Explore Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
