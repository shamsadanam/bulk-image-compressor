import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const BYTES_TO_MB = 1024 * 1024;

const InfoBox = ({ size, dimensions }) => {
  return (
    <Stack>
      <Typography variant="h6">{(size / BYTES_TO_MB).toFixed(2)}MB</Typography>
      <Typography variant="h6">{dimensions}</Typography>
    </Stack>
  );
};

export default InfoBox;
