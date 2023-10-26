import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseView from "../views/BaseView";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "../components/RequireAuth";
import SignupPage from "../pages/SignupPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <BaseView />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
