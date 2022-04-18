import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import Private from "../hoc/Private";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route
        path="*"
        element={(
          <Private>
            <Layout />
          </Private>
        )}
      />
    </Routes>
  );
};

export default RoutesManager;
