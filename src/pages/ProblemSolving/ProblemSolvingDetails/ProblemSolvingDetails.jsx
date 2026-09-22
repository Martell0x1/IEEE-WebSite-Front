import React from "react";
import WeekHeader from "../../components/ProblemSolving/WeekHeader";
import WeekProgress from "../../components/ProblemSolving/WeekProgress";
import IntroductionSection from "../../components/ProblemSolving/IntroductionSection";
import BigOSection from "../../components/ProblemSolving/BigOSection";
import ComplexityExamples from "../../components/ProblemSolving/ComplexityExamples";
import ExampleProblem from "../../components/ProblemSolving/ExampleProblem";
import PracticeProblem from "../../components/ProblemSolving/PracticeProblem";

const ProblemSolvingDetails = () => {
  const { id } = useParams();

    return (
    <section className="min-h-screen bg-black px-4 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <WeekHeader weekId={id} />

        <WeekProgress weekId={id} />

        <IntroductionSection weekId={id} />

        <BigOSection weekId={id} />

        <ComplexityExamples weekId={id} />

        <ExampleProblem weekId={id} />

        < PracticeProblem weekId={id} />
      </div>
    </section>
  );
};

export default ProblemSolvingDetails;