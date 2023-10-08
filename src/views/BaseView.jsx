import React from "react";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";

function BaseView() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomePage />
    </div>
  );
}

export default BaseView;
