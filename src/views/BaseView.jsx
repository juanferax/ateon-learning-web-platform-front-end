import React from "react";
import Header from "../components/Header";

function BaseView() {
  return (
    <div>
      <Header />
      <div className="text-xl">
        <h1>Hello world!</h1>
      </div>
    </div>
  );
}

export default BaseView;
