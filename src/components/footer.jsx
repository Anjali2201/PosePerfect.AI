import React from "react";
import { Grid, Typography } from "@mui/material";
const footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      xs={12}
      sx={{
        mt: "100px",
        background: "#F8F8F8",
        py: "50px",
      }}
    >
      <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 25 }}>
        © 2023 Yoga Pose Detection
      </Typography>
    </Grid>
  );
};

export default footer;
