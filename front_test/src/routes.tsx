import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SiteWrapper } from "./components/wrappers/onboarding/site-wrapper";
import { UserDataProvider } from "./context/user-data-context";
import ProtectedRoute from "./components/ProtectedRoutes";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import RegisterVerification from "./pages/register-verification/register-verification";
import { Onboarding } from "./pages/onboarding/onboarding";
import NotFound from "./pages/not-found/not-found";

import {
  CapitalStartup,
  ExpertiseStartup,
  ImpactStartup,
  IndustryStartup,
  MatchingStartup,
  ResultsStartup,
  SdgStartup,
  StageStartup,
  StrategyStartup,
  ValuesStartup,
} from "./pages/onboarding/onboarding-startup/onboarding-startup";

import {
  CapitalInvestor,
  ExpertiseInvestor,
  ImpactInvestor,
  IndustryInvestor,
  MatchingInvestor,
  ResultsInvestor,
  SdgInvestor,
  StageInvestor,
  StrategyInvestor,
  ValuesInvestor,
} from "./pages/onboarding/onboarding-investor/onboarding-investor";
import HomePage from "./pages/dashboard/home-page/home-page";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <UserDataProvider>
        <SiteWrapper />
      </UserDataProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "logout", element: Logout() },
      { path: "register", element: RegisterAndLogout() },
      { path: "register/verification", element: <RegisterVerification /> },

      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/stage",
        element: (
          <ProtectedRoute>
            <StageStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/industry",
        element: (
          <ProtectedRoute>
            <IndustryStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/capital",
        element: (
          <ProtectedRoute>
            <CapitalStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/impact",
        element: (
          <ProtectedRoute>
            <ImpactStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/sdg",
        element: (
          <ProtectedRoute>
            <SdgStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/values",
        element: (
          <ProtectedRoute>
            <ValuesStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/expertise",
        element: (
          <ProtectedRoute>
            <ExpertiseStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/matching",
        element: (
          <ProtectedRoute>
            <MatchingStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/strategy",
        element: (
          <ProtectedRoute>
            <StrategyStartup />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/results",
        element: (
          <ProtectedRoute>
            <ResultsStartup />
          </ProtectedRoute>
        ),
      },

      // Investor

      {
        path: "onboarding-investor/stage",
        element: (
          <ProtectedRoute>
            <StageInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/industry",
        element: (
          <ProtectedRoute>
            <IndustryInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/capital",
        element: (
          <ProtectedRoute>
            <CapitalInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/impact",
        element: (
          <ProtectedRoute>
            <ImpactInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/sdg",
        element: (
          <ProtectedRoute>
            <SdgInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/values",
        element: (
          <ProtectedRoute>
            <ValuesInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/expertise",
        element: (
          <ProtectedRoute>
            <ExpertiseInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/matching",
        element: (
          <ProtectedRoute>
            <MatchingInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/strategy",
        element: (
          <ProtectedRoute>
            <StrategyInvestor />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-investor/results",
        element: (
          <ProtectedRoute>
            <ResultsInvestor />
          </ProtectedRoute>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
