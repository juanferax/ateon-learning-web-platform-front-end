import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import BaseView from "../views/BaseView";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "../components/RequireAuth";
import SignupPage from "../pages/SignupPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <BaseView />
          </RequireAuth>
        }
      />
      <Route
        path="/courses"
        element={
          <RequireAuth>
            <BaseView page="Courses" />
          </RequireAuth>
        }
      />
      <Route
        path="/courses/:id"
        element={
          <RequireAuth>
            <BaseView page="Course details" />
          </RequireAuth>
        }
      />
      <Route
        path="/chats"
        element={
          <RequireAuth>
            <BaseView page="Chats" lateralSections={false} />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
