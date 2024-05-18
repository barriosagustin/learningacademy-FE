import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, IconButton, Grid } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "/src/assets/img/academy-high-resolution-logo-black-transparent.png";

const theme = createTheme({
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "27px",
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div
          style={{
            backgroundColor: "#00306e",
            padding: "5px 0",
            color: "white",
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" display="flex" alignItems="center">
                <PhoneIcon sx={{ marginRight: 0.5 }} /> (123) 456-7890 | Email:
                info@example.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} container justifyContent="flex-end">
              <IconButton>
                <Facebook sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: "#fff" }} />
              </IconButton>
            </Grid>
          </Grid>
        </div>

        {/* Navbar */}
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#2196F3" }}
            >
              <img width={200} src={logo} alt="Logo" />
            </Typography>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="/" style={{ textDecoration: "none", color: "#00306E" }}>
                Home
              </a>
              <a
                href="/all-courses"
                style={{ textDecoration: "none", color: "#00306E" }}
              >
                Courses
              </a>
              <a
                href="/upload-course"
                style={{
                  textDecoration: "none",
                  color: "#00306E",
                  marginLeft: "10px",
                  display: "flex",
                }}
              >
                Upload course
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </>
    </ThemeProvider>
  );
};

export default Navbar;
