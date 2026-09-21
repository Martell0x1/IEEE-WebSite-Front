import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import SeminarsPage from "../pages/Seminars/SeminarsPage";
import ProblemSolvingPage from "../pages/ProblemSolving/ProblemSolvingPage";
import CyberSecurity from "../pages/CyberSecurity/CyberSecurity";
import ChallengesPage from "../pages/Challenges/ChallengesPage";
import ChallengesDetailsPage from "../pages/Challenges/ChallengesDetails";
import RegisterationPage from "../pages/Auth/RegisterationPage";
import LoginPage from "../pages/Auth/LoginPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import MainLayout from "../components/layout/MainLayout.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="seminars" element={<SeminarsPage />} />
        <Route path="problem-solving" element={<ProblemSolvingPage />} />
        <Route path="cyberSecurity" element={<CyberSecurity />} />
        <Route path="challenges" element={<ChallengesPage />} />
        <Route path="challenges/:id" element={<ChallengesDetailsPage />} />
        <Route path="register" element={<RegisterationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
