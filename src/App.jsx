import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CourseDetail from "./components/course-detail/CourseDetail";
import DisplayCourse from "./components/display-course/DisplayCourse";
import AllCourses from "./components/all-courses/AllCourses";
import ScrollToTop from "./components/shared/ScrollToTop";
import UploadCourse from "./components/upload-course/UploadCourse";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course-detail/:courseId" element={<CourseDetail />} />
            <Route path="/course/:name/:courseId" element={<DisplayCourse />} />
            <Route path="/upload-course" element={<UploadCourse />} />
            <Route path="/all-courses" element={<AllCourses />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
