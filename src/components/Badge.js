import React from "react";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { green, amber, grey } from "@mui/material/colors";

const Badge = ({ content, color, position: { top, bottom, left, right } }) => {
  const styles = {
    position: "absolute",
    top,
    bottom,
    left,
    right,
    p: "5px",
    borderRadius: "0 0 0 7px",
    zIndex: 9,
    backgroundColor: color === "green" ? green[700] : "#3af",
    color: grey[50],
  };
  return (
    <Typography variant="subtitle2" sx={styles}>
      {content}
    </Typography>
  );
};

export default Badge;
