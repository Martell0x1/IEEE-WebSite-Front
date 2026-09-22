import React from "react";

const ExampleProblem = () => {
    return(
  <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FF8C00]">
        Section 4
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-2xl font-bold">
          Example Problem
        </h2>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
          Easy
        </span>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">
              Two Sum
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              LeetCode #1
            </p>
          </div>

          <span className="rounded-lg bg-[#FF8C00]/10 px-3 py-2 text-sm font-semibold text-[#FF8C00]">
            O(n)
          </span>
        </div>

        <div className="mt-6 space-y-5 text-sm leading-7 text-gray-400">
          <div>
            <h4 className="mb-2 font-semibold text-white">
              Problem Statement
            </h4>

            <p>
              Given an array of integers and a target value, return the indices
              of the two numbers that add up to the target.
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">
              Example
            </h4>

            <div className="rounded-lg bg-black p-4 font-mono text-xs text-gray-300">
              Input: nums = [2, 7, 11, 15], target = 9
              <br />
              Output: [0, 1]
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">
              Solution Idea
            </h4>

            <p>
              Use a hash map to store previously visited values and check
              whether the required complement already exists.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-125 text-left text-sm">
          <thead className="border-b border-white/10 bg-white/3">
            <tr>
              <th className="px-4 py-3 text-gray-400">Step</th>
              <th className="px-4 py-3 text-gray-400">Value</th>
              <th className="px-4 py-3 text-gray-400">Complement</th>
              <th className="px-4 py-3 text-gray-400">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">7</td>
              <td className="px-4 py-3 text-gray-400">Store 2</td>
            </tr>

            <tr>
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">7</td>
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3 text-green-400">
                Found pair
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};


export default ExampleProblem;