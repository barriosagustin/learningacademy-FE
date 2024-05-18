import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DisplayCourseSidenav from "./DisplayCourseSidenav";
import DisplayCourseNavbar from "./DisplayCourseNavbar";
import VideoPlayer from "./VideoPlayer";

const DisplayCourse = () => {
  const { courseId } = useParams();
  const [videos, setVideos] = useState({});
  const [courseTitle, setTitle] = useState("");
  const [percentageCompleted, setPercentageCompleted] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState({
    moduleId: 0,
    videoIndex: 0,
  });

  useEffect(() => {
    axios
      .get(`https://learningacademy-be.vercel.app/api/course/${courseId}`)
      .then((response) => {
        setTitle(response.data.title);
        const modules = response.data.modules;
        const videosWithTitles = modules.reduce((acc, module) => {
          const moduleId = module._id;
          const moduleTitle = module.title;
          const moduleVideos = module.videos;
          acc[moduleId] = { title: moduleTitle, videos: moduleVideos };
          return acc;
        }, {});

        calculatePercentageCompleted(modules);

        setVideos(videosWithTitles);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  const calculatePercentageCompleted = (modules) => {
    let totalVideos = 0;
    let completedVideos = 0;

    modules.forEach((module) => {
      module.videos.forEach((video) => {
        totalVideos++;
        if (video.completed) {
          completedVideos++;
        }
      });
    });

    const percentageCompleted = (completedVideos / totalVideos) * 100;
    setPercentageCompleted(percentageCompleted);
  };

  const handleOnCompleted = async () => {
    try {
      const currentModule = videos[currentVideoIndex.moduleId];
      const videoId = currentModule.videos[currentVideoIndex.videoIndex]._id;
      await axios.put(`https://learningacademy-be.vercel.app/api/update_value/${videoId}`, {
        completed: true,
      });

      const updatedVideos = { ...videos };
      updatedVideos[currentVideoIndex.moduleId].videos[
        currentVideoIndex.videoIndex
      ].completed = true;
      setVideos(updatedVideos);

      calculatePercentageCompleted(
        Object.values(updatedVideos).map((module) => module)
      );

    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  return (
    <>
      <DisplayCourseNavbar percentage={percentageCompleted} />
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <DisplayCourseSidenav
            videos={videos}
            title={courseTitle}
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
          />
        </div>
        <div style={{ width: "70%" }}>
          <VideoPlayer
            videos={videos}
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            onCompleted={handleOnCompleted}
          />
        </div>
      </div>
    </>
  );
};

export default DisplayCourse;
