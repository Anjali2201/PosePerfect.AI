import React from "react";
import { poseImages } from "../../utils/pose_images";
import "./DropDown.css";
import { Grid } from "@mui/material";

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        border: "1px solid black",
      }}
    >
      <Grid item xs={12} sm={6}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          id="pose-dropdown-btn"
          aria-expanded="false"
        >
          {currentPose}
        </button>

        <ul
          className="dropdown-menu dropdown-custom-menu"
          aria-labelledby="dropdownMenuButton1"
        >
          {poseList.map((pose) => (
            <li onClick={() => setCurrentPose(pose)}>
              <div className="dropdown-item-container">
                <p className="dropdown-item-1">{pose}</p>
                <img
                  src={poseImages[pose]}
                  className="dropdown-img"
                  alt="yoga-pose"
                />
              </div>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}
