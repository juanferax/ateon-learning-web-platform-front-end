import React, { useState } from "react";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import ChatsPage from "../pages/ChatsPage";
import CoursesPage from "../pages/CoursesPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import QuickAccess from "../components/QuickAccess";
import CalendarAndNotes from "../components/CalendarAndNotes";

function BaseView({ page, lateralSections = true }) {
  const renderPage = () => {
    switch (page) {
      case "Courses":
        return <CoursesPage />;
      case "Course details":
        return <CourseDetailsPage />;
      case "Chats":
        return <ChatsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row h-full mb-3">
        {/* Quick Access */}
        {lateralSections && <QuickAccess />}
        {/* Section Content */}
        {renderPage()}
        {/* Calendar & Notes */}
        {lateralSections && <CalendarAndNotes />}
      </div>
    </div>
  );
}

export default BaseView;
