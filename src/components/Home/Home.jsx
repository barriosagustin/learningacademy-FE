import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ActionAreaCard from "./Card";
import ButtonArrow from "./ButtonArrow";
import "../../styles/home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://learningacademy-be.vercel.app/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {/* HERO SECTION */}
      <div className="container">
        <img
          className="img"
          src="https://echooling-react.vercel.app/static/media/2.924b429a0601a89b04e1.jpg"
          alt="university image"
        />
        <div className="text-overlay">
          <p>Great Quality Social Life</p>
        </div>
        <div className="text-overlay-title">
          <h1>Discover the world of</h1>
          <h1>possible university.</h1>
        </div>
      </div>

      {/* FIRST SECTION */}
      <div className="firstsection-container">
        <div className="firstsection-img">
          <img
            className="background-img"
            src="https://echooling-react.vercel.app/static/media/ab.fcda2469b98ffc37a148.png"
            alt=""
          />
          <img
            className="overlay-img"
            src="https://echooling-react.vercel.app/static/media/badge.ae149076478c64c7b217.png"
            alt=""
          />
        </div>
        <div className="firstsection-text">
          <div className="container-text"></div>
          <h1 className="firstsection-text-title">Welcome to</h1>
          <h1 className="firstsection-text-title-red">Academy LMS Platform</h1>
          <p className="paragraph">
            Education is both the act of teaching knowledge to others and
          </p>
          <p className="paragraph">
            the act of receiving knowledge from someone else.
          </p>
          <p className="paragraph-freeguide">
            Have questions?{" "}
            <a className="free-guide" href="">
              <b>Get Free Guide</b>
            </a>
          </p>
          <div className="separator"></div>
          <p className="second-paragraph">
            Education also refers to the knowledge received through schooling
            instruction
          </p>
          <p className="second-paragraph">
            and to the institution of teaching as a whole. The main purpose of
            education
          </p>
          <p className="second-paragraph">
            is the integral development of a person.
          </p>
        </div>
      </div>

      <div className="grey-template"></div>

      {/* POPULAR COURSES SECTION */}
      <div className="popular-courses-title">
        <h1>Popular Courses </h1>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      {courses.length > 0 ? (
        <div className="card">
          <ActionAreaCard courses={courses}></ActionAreaCard>
        </div>
      ) : (
        <div className="no-courses-message">
          <h2>There are no courses yet</h2>
        </div>
      )}

      <div className="button-courses">
        <a className="btn" href="/all-courses">
          View All Courses <ButtonArrow />
        </a>
      </div>

      <div className="grey-template"></div>

      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
