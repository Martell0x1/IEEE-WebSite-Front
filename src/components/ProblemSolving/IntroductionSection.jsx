import React from "react";

const IntroductionSection = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FF8C00]">
        Section 1
      </p>

      <h2 className="mb-4 text-2xl font-bold">
        Introduction
      </h2>

      <div className="space-y-4 text-gray-400 leading-7">
        <p>
          Complexity analysis helps us understand how efficient an algorithm
          is as the size of its input grows.
        </p>

        <p>
          Instead of measuring an algorithm using a specific machine or exact
          execution time, we focus on how the number of operations changes
          with the input size.
        </p>

        <p>
          The two main concepts we will study are
          <span className="font-semibold text-white">
            {" "}time complexity
          </span>
          {" "}and
          <span className="font-semibold text-white">
            {" "}space complexity.
          </span>
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;