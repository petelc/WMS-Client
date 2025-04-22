import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
//import HomePage from '../../features/home/HomePage';
import RequireAuth from "./RequireAuth";
import RequestPage from "../../features/requests/RequestPage";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import LoginForm from "../../features/account/LoginForm";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import Request from "../../features/requests/new/Request";
import DashboardPage from "../../features/dashboard/DashboardPage";
import BoardPage from "../../features/board/BoardPage";
import ChangePage from "../../features/changes/ChangePage";
import ProjectPage from "../../features/projects/ProjectPage";
import WorkPage from "../../features/work/WorkPage";
import TeamPage from "../../features/team/TeamPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "requests", element: <RequestPage /> },
          { path: "request", element: <Request /> }, // to submit request
          { path: "board", element: <BoardPage /> },
          { path: "changes", element: <ChangePage /> },
          { path: "projects", element: <ProjectPage /> },
          { path: "work", element: <WorkPage /> },
          { path: "team", element: <TeamPage /> },
        ],
      },
      { path: "", element: <LoginForm /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },

      // { path: 'login', element: <LoginForm /> },
    ],
  },
]);
