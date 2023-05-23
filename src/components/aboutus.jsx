import { Grid, Typography } from "@mui/material";
import React from "react";
import car from "../Assets/yoga2.mp4";

const Aboutus = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        width: "100%",
        height: "auto",
        background: "#FFFFFF",
      }}
    >
      <Grid
        container
        xs={12}
        sx={{
          width: "100%",
          height: "467px",
          mt: "100px",
          // background:
          //   "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            px: "100px",
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
            }}
          >
            <source src={car} type="video/mp4" />
          </video>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },
          }}
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "42px",
              color: "#05422F",
              textAlign: "left",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              width: "auto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "27px",
              color: "#444957",
              mt: "10px",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
              p: {
                xs: "30px",
                lg: "0px",
              },
            }}
          >
            At PosePerfectAI, we understand that yoga is more than just physical
            exercise; it's a transformative journey that unites mind, body, and
            spirit. Our mission is to enhance this journey by providing a
            platform that leverages artificial intelligence to detect and
            analyze yoga poses with unparalleled precision and accuracy. Through
            our state-of-the-art machine learning algorithms, we have developed
            a system capable of recognizing and tracking yoga poses in
            real-time. Whether you're a seasoned yogi looking to refine your
            alignment or a beginner seeking guidance, our platform offers
            invaluable insights and feedback to enhance your practice.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Aboutus;
