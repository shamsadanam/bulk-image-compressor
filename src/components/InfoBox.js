import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const BYTES_TO_MB = 1000 * 1000;
const BYTES_TO_KB = 1000;

const InfoBox = ({ size, name, el }) => {
  const sizeAndUnit =
    size < BYTES_TO_MB
      ? `${(size / BYTES_TO_KB).toFixed(2)}KB`
      : `${(size / BYTES_TO_MB).toFixed(2)}MB`;
  return (
    <Stack sx={{ flex: "1" }}>
      <Typography variant="subtitle2" mb={1}>
        {name}
      </Typography>
      <Typography variant="body2">{sizeAndUnit}</Typography>
      <Typography variant="subtitle2">{`${el.naturalWidth}x${el.naturalHeight}`}</Typography>
    </Stack>
  );
};

export default InfoBox;
