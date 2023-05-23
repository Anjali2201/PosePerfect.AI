import React from "react";
import { poseImages } from "../utils/pose_images";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// export default function DropDown({ poseList, currentPose, setCurrentPose }) {
//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{
//         border: "1px solid black",
//         justifyContent: "center",
//         alignContent: "center",
//       }}
//     >
//       <Grid item xs={12} sm={6}>
//         <button
//           className="btn btn-secondary dropdown-toggle"
//           type="button"
//           data-bs-toggle="dropdown"
//           id="pose-dropdown-btn"
//           aria-expanded="false"
//         >
//           {currentPose}
//         </button>

//         <ul
//           className="dropdown-menu dropdown-custom-menu"
//           aria-labelledby="dropdownMenuButton1"
//         >
//           {poseList.map((pose) => (
//             <li onClick={() => setCurrentPose(pose)}>
//               <div className="dropdown-item-container">
//                 <p className="dropdown-item-1">{pose}</p>
//                 <img
//                   src={poseImages[pose]}
//                   className="dropdown-img"
//                   alt="yoga-pose"
//                 />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </Grid>
//     </Grid>
//   );
// }

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Select Pose</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={currentPose}
        label="Select Pose"
        onChange={(e) => setCurrentPose(e.target.value)}
      >
        {poseList.map((pose) => (
          <MenuItem value={pose}>
            <img
              src={poseImages[pose]}
              className="dropdown-img"
              alt="yoga-pose"
              height={30}
              width={30}
            />
            {pose}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
