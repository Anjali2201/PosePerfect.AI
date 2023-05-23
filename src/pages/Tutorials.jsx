import React from "react";
import "./Tutorials.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { tutorials, fixCamera } from "../utils/data";
import { Grid, Typography } from "@mui/material";

export default function Tutorials() {
  return (
    <Grid container>
      <Navbar />
      <Grid
        item
        xs={12}
        sx={{
          p: 5,
          mt: "100px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            color: "#399679",
          }}
        >
          Tutorials
        </Typography>

        <Grid item xs={12}>
          {tutorials.map((tutorial) => (
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#399679",
              }}
            >
              {tutorial}
            </Typography>
          ))}
        </Grid>
        <Typography
          sx={{ textAlign: "center", fontSize: "40px", color: "#399679" }}
        >
          Fix Camera
        </Typography>
        <div className="tutorials-content-container">
          {fixCamera.map((points) => (
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#399679",
              }}
            >
              {points}
            </Typography>
          ))}
        </div>
      </Grid>
      <Footer />
    </Grid>
  );
}
