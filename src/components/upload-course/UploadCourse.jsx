import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Grid, Container } from "@mui/material";
import "../../styles/upload-course.css";
import Navbar from "../shared/Navbar";

const UploadCourse = () => {
  const [notification, setNotification] = useState("");
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    instructor: "",
    category: "",
    duration: 0,
    price: 0,
    language: "",
    image: null,
    modules: [
      {
        title: "",
        videos: [{ title: "", url: "", description: "", completed: false }],
      },
    ],
  });

  const handleChange = (e, moduleIndex, videoIndex, field) => {
    const { value, files } = e.target;
    const modules = [...courseData.modules];
    if (field === "image") {
      setCourseData({ ...courseData, [field]: files[0] });
    } else if (field.startsWith("module_title")) {
      modules[moduleIndex].title = value;
    } else if (field.startsWith("video_")) {
      modules[moduleIndex].videos[videoIndex][field.split("_")[1]] = value;
    } else {
      setCourseData({ ...courseData, [field]: value });
      return;
    }
    setCourseData({ ...courseData, modules });
  };

  const handleAddModule = () => {
    setCourseData({
      ...courseData,
      modules: [
        ...courseData.modules,
        {
          title: "",
          videos: [{ title: "", url: "", description: "", completed: false }],
        },
      ],
    });
  };

  const handleAddVideo = (moduleIndex) => {
    const modules = [...courseData.modules];
    modules[moduleIndex].videos.push({
      title: "",
      url: "",
      description: "",
      completed: false,
    });
    setCourseData({ ...courseData, modules });
  };

  const handleImage = (e) => {
    setCourseData({ ...courseData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://learningacademy-be.vercel.app/api/createcourse", courseData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setNotification("Curso creado exitosamente!");
      setCourseData({
        title: "",
        description: "",
        instructor: "",
        category: "",
        duration: 0,
        price: 0,
        language: "",
        image: null,
        modules: [
          {
            title: "",
            videos: [{ title: "", url: "", description: "", completed: false }],
          },
        ],
      });
    } catch (error) {
      console.error("Error al crear el curso:", error);
    }
  };

  const isFormValid = () => {
    const { title, description, image, modules } = courseData;
    return (
      title.trim() !== "" &&
      description.trim() !== "" &&
      image !== null &&
      modules.every(
        (module) =>
          module.title.trim() !== "" &&
          module.videos.every(
            (video) =>
              video.title.trim() !== "" &&
              video.url.trim() !== "" &&
              video.description.trim() !== ""
          )
      )
    );
  };

  const handleRemoveModule = (moduleIndex) => {
    setCourseData({
      ...courseData,
      modules: courseData.modules.filter((_, index) => index !== moduleIndex),
    });
  };

  const handleRemoveVideo = (moduleIndex, videoIndex) => {
    const modules = [...courseData.modules];
    modules[moduleIndex].videos.splice(videoIndex, 1);
    setCourseData({ ...courseData, modules });
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        className="add-course-form-container"
        style={{ maxHeight: "80vh", overflowY: "auto" }}
      >
        <Typography variant="h5" gutterBottom>
          Create new course
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="add-course-form"
          encType="multipart/form-data"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title course"
                name="title"
                value={courseData.title}
                onChange={(e) => handleChange(e, null, null, "title")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Course description"
                name="description"
                value={courseData.description}
                onChange={(e) => handleChange(e, null, null, "description")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Instructor"
                name="instructor"
                value={courseData.instructor}
                onChange={(e) => handleChange(e, null, null, "instructor")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={courseData.category}
                onChange={(e) => handleChange(e, null, null, "category")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration (Expressed in weeks)"
                name="duration"
                value={courseData.duration}
                onChange={(e) => handleChange(e, null, null, "duration")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={courseData.price}
                onChange={(e) => handleChange(e, null, null, "price")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Language"
                name="language"
                value={courseData.language}
                onChange={(e) => handleChange(e, null, null, "language")}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Add the main image of the course
              </Typography>
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={(e) => handleImage(e)}
              />
            </Grid>
            {courseData.modules.map((module, moduleIndex) => (
              <Grid item xs={12} key={`module_${moduleIndex}`}>
                <TextField
                  fullWidth
                  label={`Module title ${moduleIndex + 1}`}
                  name={`module_title_${moduleIndex}`}
                  value={module.title}
                  onChange={(e) =>
                    handleChange(
                      e,
                      moduleIndex,
                      null,
                      `module_title_${moduleIndex}`
                    )
                  }
                />
                {module.videos.map((video, videoIndex) => (
                  <div
                    key={`video_${moduleIndex}_${videoIndex}`}
                    className="video"
                  >
                    <TextField
                      fullWidth
                      label={`Video title ${videoIndex + 1}`}
                      name={`video_title_${moduleIndex}_${videoIndex}`}
                      value={video.title}
                      onChange={(e) =>
                        handleChange(
                          e,
                          moduleIndex,
                          videoIndex,
                          `video_title_${moduleIndex}_${videoIndex}`
                        )
                      }
                    />
                    <TextField
                      fullWidth
                      label={`Video URL ${videoIndex + 1}`}
                      name={`video_url_${moduleIndex}_${videoIndex}`}
                      value={video.url}
                      onChange={(e) =>
                        handleChange(
                          e,
                          moduleIndex,
                          videoIndex,
                          `video_url_${moduleIndex}_${videoIndex}`
                        )
                      }
                    />
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      label={`Video description ${videoIndex + 1}`}
                      name={`video_description_${moduleIndex}_${videoIndex}`}
                      value={video.description}
                      onChange={(e) =>
                        handleChange(
                          e,
                          moduleIndex,
                          videoIndex,
                          `video_description_${moduleIndex}_${videoIndex}`
                        )
                      }
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveVideo(moduleIndex, videoIndex)}
                      style={{ marginTop: "8px" }}
                    >
                      Remove Video
                    </Button>
                  </div>
                ))}
                <Grid container spacing={2} marginTop={1}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddVideo(moduleIndex)}
                    >
                      Add video
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveModule(moduleIndex)}
                    >
                      Remove Module
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddModule}
              >
                Add module
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isFormValid()}
              >
                Save course
              </Button>
            </Grid>
            {notification && (
              <Grid item xs={12}>
                <Typography variant="body1" color="success">
                  {notification}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default UploadCourse;
