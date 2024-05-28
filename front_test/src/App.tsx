import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { routes_unprotected } from "./routes_unprotected";

const DEBUG = true;

function App() {
  const router = useMemo(() => createBrowserRouter(routes), []);
  const router_unprotected = useMemo(
    () => createBrowserRouter(routes_unprotected),
    []
  );

  if (DEBUG) {
    return <RouterProvider router={router_unprotected} />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
