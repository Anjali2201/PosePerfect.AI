import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import video from "../Assets/yoga1.mp4";
import { Button, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Grid
      container
      xs={12}
      justifyContent="center"
      minHeight="100vh"
      sx={{
        p: 3,
      }}
    >
      <Grid
        container
        xs={12}
        sm={5}
        justifyContent="center"
        alignItems="left"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            width: "auto",
            mt: "50px",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "69px",
            lineHeight: "69px",
            color: "#399679",
            textAlign: "left",
          }}
        >
          "Discover Perfect Alignment with
          <br />
          <span style={{ color: "#05422F" }}>
            AI-Powered Yoga Detection"
          </span>{" "}
          <br />
        </Typography>
        <Typography
          sx={{
            width: "auto",
            my: 2,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16.4447px",
            lineHeight: "27px",
            color: "#444957",
            textAlign: "left",
          }}
        >
          "Revolutionize Your Yoga Journey with Next-Gen Pose Detection"
        </Typography>

        <Button
          href="/start"
          variant="contained"
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "14px 34px",
            gap: "7px",
            mt: 3,
            width: "190px",
            height: "63px",
            background: "#05422F",
            borderRadius: "34px",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Explore Now!
        </Button>
      </Grid>

      {/* --------- Right Side ----------- */}
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            border: 0,
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
