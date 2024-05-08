import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

const App: React.FC = () => {
  useEffect(() => {
    const desiredHash = "#/step1";
    const currentHash = window.location.hash;

    if (currentHash !== desiredHash) {
      window.location.hash = desiredHash;
    }
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
