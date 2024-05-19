import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import axios from "axios";
import "../../styles/all-courses.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Filters from "./Filters";
import AllCoursesCard from "./AllCoursesCard";
import Footer from "../shared/Footer";
import CircularProgress from "@mui/material/CircularProgress";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [coursesLength, setCoursesLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [filterLanguage, setFilterLanguage] = useState("All Languages");
  const [filterPrice, setFilterPrice] = useState("All Prices");
  const [filterSkill, setFilterSkill] = useState("All Skills");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://learningacademy-be.vercel.app/api/courses");
        setCourses(response.data);
        setFilteredCourses(response.data);
        setCoursesLength(response.data.length);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    let filtered = courses;

    if (filterCategory !== "All Categories") {
      filtered = filtered.filter(
        (course) => course._doc?.category === filterCategory
      );
    }

    if (filterLanguage !== "All Languages") {
      filtered = filtered.filter(
        (course) => course._doc.language === filterLanguage
      );
    }

    if (filterPrice !== "All Prices") {
      if (filterPrice === "Paid Courses") {
        filtered = filtered.filter((course) => course._doc.price > 0);
      } else if(filterPrice === "Free courses"){
        filtered = filtered.filter((course) => course._doc.price === 0);
      }
    }

    if (filterSkill !== "All Skills" && filterSkill !== "Intermediate") {
      filtered = filtered.filter((course) => course.skill === filterSkill);
    }

    setFilteredCourses(filtered);
    setCoursesLength(filtered.length);
  }, [courses, filterCategory, filterLanguage, filterPrice, filterSkill]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handleChange = (event, value) => setCurrentPage(value);

  const handleCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setFilterLanguage(event.target.value);
  };

  const handlePriceChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const handleSkillChange = (event) => {
    setFilterSkill(event.target.value);
  };

  return (
    <>
      <Navbar />
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      )}
      <div className="container">
        <img
          className="img"
          src="https://echooling-react.vercel.app/static/media/1.444626c32f772f4850ee.jpg"
          alt="course background image"
        />
        <div className="text-allcourses-overlay-title">
          <h1>Courses</h1>
          <ul className="ul-list">
            <li>
              <a style={{ color: "white", textDecoration: "none" }} href="/">
                Home
              </a>
            </li>
            <li>Courses</li>
          </ul>
        </div>
      </div>

      <Filters
        onCategoryChange={handleCategoryChange}
        onLanguageChange={handleLanguageChange}
        onPriceChange={handlePriceChange}
        onSkillChange={handleSkillChange}
      />

      <div className="container-sections">
        <div className="sortby-section">
          <h4>We found {coursesLength} courses available for you</h4>
        </div>

        {coursesLength > 0 ? (
          <div className="card">
            <AllCoursesCard courses={currentCourses}></AllCoursesCard>
          </div>
        ) : (
          <div className="no-courses-message">
            <h2>😔 No courses available yet</h2>
            <img
              src="https://dmf76jm51vpov.cloudfront.net/www2/images/main/2020/webpage/Course-not-Found.jpg" 
              alt="No course"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
        )}

        <div className="all-courses-paginator" style={{ fontSize: "1.5rem" }}>
          <Stack
            spacing={2}
            sx={{ marginTop: "20px" }}
            direction="row"
            justifyContent="center"
          >
            <Pagination
              count={Math.ceil(filteredCourses.length / coursesPerPage)}
              page={currentPage}
              onChange={handleChange}
              shape="rounded"
              variant="outlined"
              color="primary"
            />
          </Stack>
        </div>
      </div>

      <div style={{ marginTop: "2.5em" }} className="footer">
        <Footer />
      </div>
    </>
  );
};

export default AllCourses;
