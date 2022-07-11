import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { BYTES_TO_KB, BYTES_TO_MB } from "./constants";

const InfoBox = ({ size, name, el }) => {
  const sizeAndUnit =
    size < BYTES_TO_MB
      ? `${(size / BYTES_TO_KB).toFixed(2)}KB`
      : `${(size / BYTES_TO_MB).toFixed(2)}MB`;

  const styles = {
    fontSize: { xs: ".70rem", sm: "14px" },
  };
  return (
    <Stack sx={{ flex: "1" }}>
      <Typography sx={styles} variant="subtitle2" mb={1}>
        {name}
      </Typography>
      <Typography sx={styles} variant="body2">
        {sizeAndUnit}
      </Typography>
      <Typography
        sx={styles}
        variant="subtitle2"
      >{`${el.naturalWidth}x${el.naturalHeight}`}</Typography>
    </Stack>
  );
};

export default InfoBox;
