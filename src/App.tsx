import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

const App: React.FC = () => {
  {
    /* RETURN TO FIRST STEP AFTER REFRESH */
  }
  useEffect(() => {
    const currentPath = window.location.pathname;
    const desiredPath = "/step1";

    if (currentPath !== desiredPath) {
      window.location.href = desiredPath;
    }
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
