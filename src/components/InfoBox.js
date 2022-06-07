import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const BYTES_TO_MB = 1024 * 1024;
const BYTES_TO_KB = 1024;

const InfoBox = ({ size, res: { width, height } }) => {
  const sizeAndUnit =
    size < 1024 * 1024
      ? `${(size / BYTES_TO_KB).toFixed(2)}KB`
      : `${(size / BYTES_TO_MB).toFixed(2)}MB`;
  return (
    <Stack>
      <Typography variant="body2">{sizeAndUnit}</Typography>
      <Typography variant="body2">{`${width}x${height}`}</Typography>
    </Stack>
  );
};

export default InfoBox;
