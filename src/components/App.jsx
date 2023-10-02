import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProgramPage = lazy(() => import("../pages/ProgramPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/program" element={<ProgramPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
