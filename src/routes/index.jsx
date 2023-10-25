import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseView from "../views/BaseView";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "../components/RequireAuth";

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
    </Routes>
  </BrowserRouter>
);

export default Router;
