import { Copy } from "lucide-react";
import { useState } from "react";
import { codeExample } from "../../data/problemSolvingData";

const ComplexityExamples = () => {
 const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample.code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FF8C00]">
        Section 3
      </p>

      <h2 className="mb-6 text-2xl font-bold">
        Time Complexity Examples
      </h2>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080808]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-4 text-sm">
            <button className="font-semibold text-[#FF8C00]">
              C++
            </button>

            <button className="text-gray-500 hover:text-white">
              Python
            </button>

            <button className="text-gray-500 hover:text-white">
              Java
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <Copy size={16} />

            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <pre className="overflow-x-auto p-5 text-sm leading-7 text-gray-300">
          <code>{codeExample.code}</code>
        </pre>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
          <p className="text-sm text-gray-500">
            Time Complexity
          </p>

          <p className="mt-2 text-xl font-bold text-[#FF8C00]">
            {codeExample.timeComplexity}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
          <p className="text-sm text-gray-500">
            Space Complexity
          </p>

          <p className="mt-2 text-xl font-bold text-[#FF8C00]">
            {codeExample.spaceComplexity}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
        <p className="text-sm leading-6 text-gray-300">
          <span className="font-semibold text-blue-400">
            Master Theorem:
          </span>{" "}
          It can be used to analyze the time complexity of many recursive
          divide-and-conquer algorithms.
        </p>
      </div>
    </section>
  );
};

export default ComplexityExamples;