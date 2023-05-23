import React from "react";
import Navbar from "../components/navbar";
import Yoga from "../components/Yoga/Yoga";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

const Detect = () => {
  return (
    <Grid container>
      <Navbar />

      <Yoga />
      <Footer />
    </Grid>
  );
};

export default Detect;
