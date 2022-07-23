import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/study" element={<TeacherList />} />
      <Route path="/give-classes" element={<TeacherForm />} />
    </Routes>
  );
}

export default MainRoutes;
