import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import LessonDetail from "./pages/LessonDetail";

export default function App() {
  return (
    <Routes>
      {/* Main layout */}
      <Route path="/" element={<MainLayout />}>
        {/* Nested routes */}
        <Route index element={<Home />} />
        <Route path="courses">
          <Route index element={<Courses />} />
          <Route path=":courseId">
            <Route index element={<CourseDetail />} />
            <Route path="lessons/:lessonId" element={<LessonDetail />} />
          </Route>
        </Route>
      </Route>

      {/* Fallback redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
