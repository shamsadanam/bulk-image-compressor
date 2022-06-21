import React from "react";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadBtn = ({ source, name, sx }) => {
  return (
    <IconButton
      sx={sx}
      href={source}
      download={name}
      aria-label="download"
      variant="contained"
      color="success"
      size="medium"
    >
      <FileDownloadIcon />
    </IconButton>
  );
};

export default DownloadBtn;
