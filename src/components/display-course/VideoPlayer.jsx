import React, { useEffect } from "react";
import "../../styles/video-player.css";

const VideoPlayer = ({
  videos,
  currentVideoIndex,
  setCurrentVideoIndex,
  onCompleted,
}) => {
  const handlePreviousVideo = () => {
    const { moduleId, videoIndex } = currentVideoIndex;
    if (videoIndex > 0) {
      setCurrentVideoIndex({ moduleId, videoIndex: videoIndex - 1 });
    } else {
      const moduleIds = Object.keys(videos);
      const currentModuleIndex = moduleIds.findIndex((id) => id === moduleId);
      if (currentModuleIndex > 0) {
        const previousModuleId = moduleIds[currentModuleIndex - 1];
        const previousModuleVideosCount =
          videos[previousModuleId].videos.length;
        setCurrentVideoIndex({
          moduleId: previousModuleId,
          videoIndex: previousModuleVideosCount - 1,
        });
      }
    }
  };

  const handleNextVideo = () => {
    const { moduleId, videoIndex } = currentVideoIndex;
    const moduleIds = Object.keys(videos);
    if (videoIndex < videos[moduleId].videos.length - 1) {
      setCurrentVideoIndex({ moduleId, videoIndex: videoIndex + 1 });
    } else {
      const currentModuleIndex = moduleIds.findIndex((id) => id === moduleId);
      const hasNextModule = currentModuleIndex < moduleIds.length - 1;
      if (
        hasNextModule &&
        videos[moduleIds[currentModuleIndex + 1]].videos.length > 0
      ) {
        const nextModuleId = moduleIds[currentModuleIndex + 1];
        setCurrentVideoIndex({ moduleId: nextModuleId, videoIndex: 0 });
      }
    }
  };

  useEffect(() => {
    const moduleIds = Object.keys(videos);
    if (moduleIds.length > 0 && videos[moduleIds[0]].videos.length > 0) {
      setCurrentVideoIndex({ moduleId: moduleIds[0], videoIndex: 0 });
    }
  }, [videos]);

  const currentModule = videos[currentVideoIndex.moduleId];
  const currentVideo = currentModule
    ? currentModule.videos[currentVideoIndex.videoIndex]
    : null;

  const urlId = extractVideoId(currentVideo?.url);

  function extractVideoId(url) {
    if (url) {
      const match = url.match(
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      );
      return match ? match[1] : "";
    }
  }

  const isFirstVideoOfFirstModule = () => {
    const moduleIds = Object.keys(videos);
    const firstModuleId = moduleIds[0];
    return (
      currentVideoIndex.moduleId === firstModuleId &&
      currentVideoIndex.videoIndex === 0
    );
  };

  const isFirstVideoOfAnyModule = () => {
    const moduleIds = Object.keys(videos);
    return moduleIds.some(
      (moduleId) =>
        currentVideoIndex.moduleId === moduleId &&
        currentVideoIndex.videoIndex === 0
    );
  };

  const getPreviousButtonText = () => {
    if (isFirstVideoOfFirstModule()) {
      return "Previous module";
    } else if (isFirstVideoOfAnyModule()) {
      return "Previous module";
    } else {
      return "Previous video";
    }
  };

  const getLastVideoOfModule = () => {
    const moduleIds = Object.keys(videos);
    const lastModuleId = moduleIds[moduleIds.length - 1];
    if (lastModuleId) {
      const lastModuleVideos = videos[lastModuleId]?.videos;
      if (lastModuleVideos.length > 0) {
        return lastModuleVideos[lastModuleVideos.length - 1];
      }
    }
    return null;
  };

  const isLastVideoOfModule = () => {
    const currentModuleId = currentVideoIndex.moduleId;
    const currentModuleVideos = videos[currentModuleId]?.videos;
    const lastIndex = currentModuleVideos?.length - 1;
    return currentVideoIndex?.videoIndex === lastIndex;
  };

  const isLastVideoOfLastModule = () => {
    const moduleIds = Object.keys(videos);
    const lastModuleId = moduleIds[moduleIds.length - 1];
    const lastModuleVideos = videos[lastModuleId].videos;
    const lastIndex = lastModuleVideos.length - 1;
    return (
      currentVideoIndex.moduleId === lastModuleId &&
      currentVideoIndex.videoIndex === lastIndex
    );
  };

  const getLastButtonText = () => {
    if (isLastVideoOfModule()) {
      const lastVideoOfModule = getLastVideoOfModule();
      return lastVideoOfModule ? "Next module" : "Next video";
    } else {
      return "Next video";
    }
  };

  const isFirstVideo = isFirstVideoOfAnyModule();
  const isLastVideo = isLastVideoOfModule();
  const isCompleted = currentVideo?.completed;

  return (
    <div>
      {currentVideo && (
        <>
          <h2 style={{marginTop:"2em", marginBottom:"0.5em"}}>{currentVideo.title}</h2>
          <iframe
            title="YouTube video player"
            width="90%"
            height="600"
            src={`https://www.youtube.com/embed/${urlId}`}
            frameBorder="0"
            allowFullScreen
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            {!isFirstVideoOfFirstModule() && (
              <button
                className="button-previous"
                disabled={isFirstVideo}
                onClick={handlePreviousVideo}
              >
                {getPreviousButtonText()}
              </button>
            )}
            <div style={{ margin: "0 auto" }}>
              {!isCompleted && (
                <button className="button-completed" onClick={onCompleted}>
                  Mark as completed
                </button>
              )}
            </div>
            {!isLastVideoOfLastModule() && (
              <button
                className="button-next"
                disabled={isLastVideo}
                onClick={handleNextVideo}
              >
                {getLastButtonText()}
              </button>
            )}{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
