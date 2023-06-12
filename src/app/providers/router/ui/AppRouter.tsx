import { getUserAuth } from "entities/User";
import { PageLoader } from "pages/PageLoader";
import { Suspense, memo, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route,  Routes } from "react-router-dom";
import { AppRouteProps, AppRoutes, routeConfig } from "shared/config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {

  const renderWithWrapper = useCallback((route: AppRouteProps) => {

    const element = <Suspense fallback={<PageLoader />}>
    <div className="page-wrapper">{route.element}</div>
  </Suspense>

    return (<Route
          key={route.path}
          element={
            route.authOnly? <RequireAuth>{element}</RequireAuth> : element
          }
          path={route.path}
        />
      ) 
    
    },[])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
      
    </Routes>
  );
};

export default memo(AppRouter);
