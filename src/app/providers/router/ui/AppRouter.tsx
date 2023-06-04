import { getUserAuth } from "entities/User";
import { PageLoader } from "pages/PageLoader";
import { Suspense, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {

  const isAuth = useSelector(getUserAuth)

  const routes = useMemo(()=>{
    return Object.values(routeConfig).filter(route => {
      if(route.authOnly && !isAuth){
        return false
      }
      return true
    })
  },[isAuth])

  return (
    <Routes>
      {routes.map(({ element, path }) => (
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

export default memo(AppRouter);
