import React from "react";
import Hero from "../../components/HomeComponent/Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col justify-between selection:bg-[#FF8C00] selection:text-white">
      <main className="grow ">
        <Hero />
      </main>
    </div>
  );
};

export default HomePage;
