import Navbar from "../shared/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import CourseDetailCard from "./CourseDetailCard";
import RelatedCoursesCard from "./RelatedCoursesCard";
import { useParams } from "react-router-dom";
import "../../styles/course-detail.css";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setcourse] = useState([]);

  useEffect(() => {
    axios
      .get(`https://learningacademy-be.vercel.app/api/course/${courseId}`)
      .then((response) => {
        setcourse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (  
    <>
      <Navbar></Navbar>
      <div className="course-detail-container">
        <img
          className="img"
          src="https://echooling-react.vercel.app/static/media/course-banner2.eca0b8b803d6c95e4136.jpg"
          alt="university image"
        />
        <div className="course-detail-text-overlay">
          <p>{course?.category}</p>
        </div>
        <div className="course-detail-text-overlay-title">
          <h1>{course?.title}</h1>
        </div>
      </div>
      <div className="content">
        <div className="right-section">
          <div className="ifames">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/e5Hc2B50Z7c"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="about-course">
              <h1 className="about-course-title">About this course</h1>
              <p className="about-course-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                quisquam quibusdam commodi ea. Ducimus odio fugiat accusamus
                dolores iste reiciendis tempora laudantium iure eos
                necessitatibus dolorum nulla magnam, cupiditate totam.
              </p>
              <p className="about-course-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius
                iste autem, similique quia, necessitatibus distinctio, ea
                nostrum natus tempore laborum quo. Unde, adipisci a labore
                tempora quo facere ad!
              </p>
              <p className="about-course-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                necessitatibus inventore similique animi corrupti minima
                assumenda, dolore iste natus nobis harum corporis laborum
                pariatur exercitationem et excepturi explicabo accusamus ex?
              </p>
              <br />
              <p className="about-course-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                iste non, beatae ea atque, saepe, vitae nam repellendus
                accusamus voluptatem perspiciatis animi eveniet quisquam at.
                Fuga architecto alias labore deserunt.
              </p>

              <div className="about-course-container-img">
                <img
                  // src={`data:image/jpeg;base64,${base64Image}`}
                  src="https://echooling-react.vercel.app/static/media/1.b72c23dfb77d83dd1915.jpg"
                  alt=""
                  className="about-course-img"
                />
              </div>

              <h1 className="related-courses-title">Related courses</h1>
              <div className="related-courses">
                <RelatedCoursesCard />
                <RelatedCoursesCard />
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <CourseDetailCard course={course} />
        </div>
      </div>  
    </>
  );
};

export default CourseDetail;
