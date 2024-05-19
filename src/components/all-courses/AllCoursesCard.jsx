import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../../styles/all-courses-card.css";

const AllCoursesCard = ({ courses }) => {
  return (
    <>
      {courses.map((course, index) => (
        <Link to={`/course-detail/${course?._doc?._id}`} key={course?._doc._id}>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <div className="badge">Intermediate</div>
              <CardMedia
                sx={{ marginBottom: "5px" }}
                component="img"
                height="280"
                image={`data:image/jpeg;base64,${course?.image}`}
                alt="related course img"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  fontSize={20}
                  color={"#00306E"}
                  sx={{ textDecoration: "none" }}
                >
                  {course?._doc.title}
                  <div className="all-courses-card-info">
                    <div className="info-item">
                      <ArticleIcon />{" "}
                      <span>{`${course?._doc?.modules.reduce(
                        (total, module) => total + module.videos.length,
                        0
                      )} ${
                        course?._doc?.modules.reduce(
                          (total, module) => total + module.videos.length,
                          0
                        ) === 1
                          ? "Lesson"
                          : "Lessons"
                      }`}</span>
                    </div>
                    <div className="info-item">
                      <AccessTimeIcon />{" "}
                      <span style={{ textDecoration: "none" }}>
                        {course._doc?.duration} weeks
                      </span>
                    </div>
                    <div className="info-item">
                      <PersonOutlineIcon />{" "}
                      <span>{course._doc?.instructor}</span>
                    </div>
                  </div>
                </Typography>
                <hr
                  style={{
                    width: "100%",
                    border: "0.5px solid #ccc",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <StarRateIcon style={{ color: "#F5AE5D" }} />
                  <Typography
                    variant="body2"
                    display={"flex"}
                    flex={1}
                    marginLeft={"0.3em"}
                    fontSize={15}
                    color="text.secondary"
                  >
                    <div className="reviews">4.2 review</div>{" "}
                  </Typography>
                  <Typography variant="body2" fontSize={17} color={"#101217"}>
                    {course._doc?.price === 0 ? "Free" : `$${course._doc?.price}`}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default AllCoursesCard;
