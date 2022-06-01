import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const BYTES_TO_MB = 1024 * 1024;
const BYTES_TO_KB = 1024;

const InfoBox = ({ size, dimensions }) => {
  const sizeAndUnit =
    size < 1024 * 1024
      ? `${(size / BYTES_TO_KB).toFixed(2)}KB`
      : `${(size / BYTES_TO_MB).toFixed(2)}MB`;
  return (
    <Stack>
      <Typography variant="h6">{sizeAndUnit}</Typography>
      <Typography variant="h6">{dimensions}</Typography>
    </Stack>
  );
};

export default InfoBox;
