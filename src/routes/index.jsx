import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseView from "../views/BaseView";
import LoginPage from "../pages/LoginPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseView />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
