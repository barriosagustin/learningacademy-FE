import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import "../../styles/card.css";

const ActionAreaCard = ({ courses }) => {
  return (
    <>
      {courses.slice(0, 4).map((course) => (
        <Link to={`/course-detail/${course?._doc?._id}`} key={course?._doc._id}>
          <Card sx={{ maxWidth: 355 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="280"
                image={`data:image/jpeg;base64,${course?.image}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  <ul className="list-title">
                    <li className="category">{course?._doc?.category}</li>
                    <li className="lessons">{`${course?._doc?.modules.reduce(
                      (total, module) => total + module.videos.length,
                      0
                    )} Lesson/s`}</li>
                  </ul>
                </Typography>
                <Typography variant="body2" fontSize={20} color={"#00306E"}>
                  {course?._doc?.title}
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
                  <GroupIcon />
                  <Typography
                    variant="body2"
                    display={"flex"}
                    flex={1}
                    marginLeft={"0.3em"}
                    fontSize={15}
                    color="text.secondary"
                  >
                    {course?._doc?.students ? course?._doc?.students : 0}{" "}
                    Students
                  </Typography>
                  <Typography variant="body2" fontSize={17} color={"#D2093C"}>
                    ${course?._doc?.price ? course?._doc?.price : 0}
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
export default ActionAreaCard;
