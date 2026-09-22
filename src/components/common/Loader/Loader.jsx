import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-16 h-16 border-4 border-t-[#FF8C00] border-gray-300 rounded-full animate-spin">
        <p className="sr-only">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
