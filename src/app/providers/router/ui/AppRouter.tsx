import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { PageLoader } from "pages/PageLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
