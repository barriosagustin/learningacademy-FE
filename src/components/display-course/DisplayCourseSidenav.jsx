// Importaciones necesarias
import React from "react";
import { Divider, List, ListItemButton, ListItemText } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const DisplayCourseSidenav = ({
  videos,
  title,
  currentVideoIndex,
  setCurrentVideoIndex,
}) => {
  return (
    <>
      <div
        style={{
          marginTop: "25px",
          width: "90%",
          maxHeight: "700px",
          overflowY: "auto",
        }}
      >
        <List>
          {/* Título del curso */}
          <ListItemButton
            sx={{
              alignItems: "center",
              color: "white",
              fontSize: "40px",
              fontWeight: "bold",
              cursor: "default",
              backgroundColor: "black!important",
            }}
          >
            <ListItemText
              style={{
                display: "flex",
                justifyContent: "center",
                textTransform: "uppercase",
              }}
              primary={title}
            />
          </ListItemButton>
          <Divider />

          {/* Renderizar módulos y videos */}
          {videos &&
            Object.keys(videos).map((moduleId) => (
              <div key={moduleId}>
                {/* Module */}
                <ListItemButton
                  sx={{
                    alignItems: "center",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "700px",
                    cursor: "default",
                    backgroundColor: "#F0F3F6",
                  }}
                >
                  <ListItemText primary={videos[moduleId].title} />
                </ListItemButton>
                {/* Videos */}
                {videos[moduleId].videos.map((video, videoIndex) => (
                  <div key={videoIndex}>
                    <ListItemButton
                      onClick={() =>
                        setCurrentVideoIndex({ moduleId, videoIndex })
                      }
                      sx={{
                        backgroundColor:
                          currentVideoIndex.moduleId === moduleId &&
                          currentVideoIndex.videoIndex === videoIndex
                            ? "lightblue"
                            : "transparent",
                        "&:hover": {
                          backgroundColor:
                            currentVideoIndex.moduleId === moduleId &&
                            currentVideoIndex.videoIndex === videoIndex
                              ? "lighterblue"
                              : "grey",
                        },
                      }}
                    >
                      {video.completed ? (
                        <CheckCircleOutlineIcon
                          color="primary"
                          sx={{ marginRight: "10px" }}
                        />
                      ) : (
                        <RadioButtonUncheckedIcon
                          color="disabled"
                          sx={{ marginRight: "10px" }}
                        />
                      )}
                      <ListItemText
                        sx={{ color: "#989697" }}
                        primary={video.title}
                      />
                    </ListItemButton>
                    <Divider />
                  </div>
                ))}
                <Divider />
              </div>
            ))}
        </List>
      </div>
    </>
  );
};

export default DisplayCourseSidenav;
