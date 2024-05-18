import React from "react";
import { Card, CardContent, Typography, Divider, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const CourseDetailCard = ({ course }) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo(`/course/${course?.title}/${course?._id}`);
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          maxWidth: "600px",
          padding: "30px",
          margin: "20px",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <span style={{ fontSize: "20px", color: "blue" }}>
              ${(parseFloat(`${course?.price ?? 0}`) * 0.75).toFixed(2)}
            </span>{" "}
            <del style={{ fontSize: "15px" }}>${course?.price ?? 0}</del>{" "}
            <span
              style={{
                backgroundColor: "#FDF2F4",
                color: "#DC3F5B",
                fontSize: "15px",
              }}
            >
              25% OFF
            </span>
          </Typography>
          <Divider sx={{ marginY: 3 }} />
          <Typography
            display="flex"
            justifyContent="space-between"
            variant="body2"
          >
            <span>Instructor:</span>
            <span>{course?.instructor ?? '-'}</span>
          </Typography>{" "}
          <Divider sx={{ marginY: 2 }} />
          <Typography
            display="flex"
            justifyContent="space-between"
            variant="body2"
          >
            <span>Subject:</span>
            <span>{course.category ?? '-' }</span>
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography
            display="flex"
            justifyContent="space-between"
            variant="body2"
          >
            <span>Enrolled:</span>
            <span>{course.students ?? 0} students</span>
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography
            display="flex"
            justifyContent="space-between"
            variant="body2"
          >
            <span>Duration:</span>
            <span>{course.duration ?? 0} Weeks</span>
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography
            display="flex"
            justifyContent="space-between"
            variant="body2"
          >
            <span>Lectures:</span>
            <span>5 lectures</span>
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography
            display="flex"
            justifyContent="space-between"
            variant="body2"
          >
            <span>Language:</span>
            <span>{course.language ?? '-'}</span>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 8, width: "100%" }}
            onClick={handleClick}
          >
            Start Now
          </Button>
          <Typography
            variant="body2"
            sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}
          >
            <Tooltip
              title={
                <div>
                  <IconButton component="a" href="https://www.facebook.com">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton component="a" href="https://twitter.com">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton component="a" href="https://www.linkedin.com">
                    <LinkedInIcon />
                  </IconButton>
                </div>
              }
              arrow
              placement="top"
              open={open}
              onClose={handleTooltipClose}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <IconButton
                aria-label="Share"
                onMouseEnter={handleTooltipOpen}
                onMouseLeave={handleTooltipClose}
              >
                <span style={{ color: "black", fontSize: "16px" }}>
                  Share this course
                </span>{" "}
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseDetailCard;
