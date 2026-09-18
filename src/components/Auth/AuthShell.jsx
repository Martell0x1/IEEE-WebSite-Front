import { motion } from "framer-motion";
import backgroundImage from "../../assets/images/background.png";

const AuthShell = ({ eyebrow, title, accent, description, quotes, children }) => {
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
            {eyebrow && (
              <span className="inline-block text-[10px] sm:text-xs tracking-[0.2em] text-[#FF8C00] font-bold">
                {eyebrow}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight drop-shadow-md">
              {title}{" "}
              {accent && (
                <>
                  <br className="hidden sm:inline" />
                  <span className="text-[#FF8C00]">{accent}</span>
                </>
              )}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              {description}
            </p>
          </div>

          {quotes?.length > 0 && (
            <div className="border-l-2 border-[#FF8C00] pl-4 py-1 text-xs sm:text-sm text-gray-200 font-medium space-y-1 text-left max-w-md mx-auto lg:mx-0 bg-black/40 backdrop-blur-sm rounded-r-md">
              {quotes.map((line, index) =>
                index === quotes.length - 1 ? (
                  <p key={line} className="text-white font-semibold">
                    {line}
                  </p>
                ) : (
                  <p key={line}>{line}</p>
                ),
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          className="lg:col-span-7 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthShell;
