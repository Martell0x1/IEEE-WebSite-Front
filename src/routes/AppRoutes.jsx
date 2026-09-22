import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.jsx";
import Loader from "../components/common/Loader/Loader.jsx";
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const ProjectsPage = lazy(() => import("../pages/Projects/ProjectsPage"));
const SeminarsPage = lazy(() => import("../pages/Seminars/SeminarsPage"));
const ProblemSolvingPage = lazy(() => import("../pages/ProblemSolving/ProblemSolvingPage"),);
const ProblemSolvingDetails = lazy(() => import("../pages/ProblemSolving/ProblemSolvingDetails/ProblemSolvingDetails.jsx"));
const CyberSecurity = lazy(() => import("../pages/CyberSecurity/CyberSecurity"),);
const ChallengesPage = lazy(() => import("../pages/Challenges/ChallengesPage"));
const ChallengesDetailsPage = lazy(() => import("../pages/Challenges/ChallengesDetails"),);
const RegisterationPage = lazy(() => import("../pages/Auth/RegisterationPage"));
const LoginPage = lazy(() => import("../pages/Auth/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="seminars" element={<SeminarsPage />} />
            <Route path="problem-solving" element={<ProblemSolvingPage />} />
            <Route path="problem-solving/:id" element={<ProblemSolvingDetails />} />
            <Route path="cyberSecurity" element={<CyberSecurity />} />
            <Route path="challenges" element={<ChallengesPage />} />
            <Route path="challenges/:id" element={<ChallengesDetailsPage />} />
            <Route path="register" element={<RegisterationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
