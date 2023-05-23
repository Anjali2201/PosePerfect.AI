import React, { useState } from "react";
import { poseInstructions } from "../utils/data";
import { poseImages } from "../utils/pose_images";
import { Grid } from "@mui/material";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

export default function Instructions({ currentPose }) {
  const [instructions, setInstructions] = useState(poseInstructions);

  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        m: 3,
      }}
    >
      <Grid item xs={12} sm={6}>
        <List>
          {instructions[currentPose].map((instruction, index) => {
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{index + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={instruction} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="pose-demo-img"
          src={poseImages[currentPose]}
          style={{
            borderRadius: "10px",
            height: "500px",
          }}
        />
      </Grid>
    </Grid>
  );
}
