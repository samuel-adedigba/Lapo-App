import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import ProtectedRoute from "./protectedRoute";
import Loading from "../components/re-useable/Loading";
import Layout from "../components/Navigation/Layout";


const AppRoutes: React.FC = () => {

  return (
    <Suspense fallback={<Loading size={40} overlay={true} />}>
            <Layout>
          <Routes>
            {privateRoutes.map(({ key, path, component: Component }) => (
              <Route
                key={key}
                path={path}
                element={
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Routes>
        </Layout>
    </Suspense>
  );
};

export default AppRoutes;
