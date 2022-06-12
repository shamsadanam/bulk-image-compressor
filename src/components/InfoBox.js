import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const BYTES_TO_MB = 1000 * 1000;
const BYTES_TO_KB = 1000;

const InfoBox = ({ size, name, res }) => {
  const sizeAndUnit =
    size < BYTES_TO_MB
      ? `${(size / BYTES_TO_KB).toFixed(2)}KB`
      : `${(size / BYTES_TO_MB).toFixed(2)}MB`;
  return (
    <Stack>
      <Typography variant="body2">{sizeAndUnit}</Typography>
      <Typography varian="body2">{name}</Typography>
      {res && (
        <Typography variant="body2">{`${res.width}x${res.height}`}</Typography>
      )}
    </Stack>
  );
};

export default InfoBox;
