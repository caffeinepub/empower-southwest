import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GetInvolved from "./pages/GetInvolved";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});

const getInvolvedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved",
  component: GetInvolved,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  privacyRoute,
  getInvolvedRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
