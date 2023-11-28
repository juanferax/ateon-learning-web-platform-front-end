import React, { useState } from "react";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import ChatsPage from "../pages/ChatsPage";
import CoursesPage from "../pages/CoursesPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import SchedulePage from "../pages/SchedulePage";
import QuickAccess from "../components/QuickAccess";
import CalendarAndNotes from "../components/CalendarAndNotes";
import CourseManagementPage from "../pages/CourseManagementPage";
import CourseStatsPage from "../pages/CourseStatsPage";

function BaseView({ page, lateralSections = true }) {
  const renderPage = () => {
    switch (page) {
      case "Courses":
        return <CoursesPage />;
      case "Course details":
        return <CourseDetailsPage />;
      case "Course management":
        return <CourseManagementPage />;
      case "Course stats":
        return <CourseStatsPage />;
      case "Chats":
        return <ChatsPage />;
      case "Schedule":
        return <SchedulePage />;
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
