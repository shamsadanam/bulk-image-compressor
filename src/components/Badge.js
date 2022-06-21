import React from "react";
import Box from "@mui/material/Box";
import { green, amber, grey } from "@mui/material/colors";

const Badge = ({ content, color, position: { top, bottom, left, right } }) => {
  const styles = {
    position: "absolute",
    top,
    bottom,
    left,
    right,
    // transform: "translate(10%, -50%)",
    zIndex: 9,
    backgroundColor: color === "green" ? green[700] : amber[900],
    color: grey[50],
    p: "5px",
    borderRadius: "0 0 0 7px",
  };
  return <Box sx={styles}>{content}</Box>;
};

export default Badge;
