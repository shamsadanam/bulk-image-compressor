import React from "react";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadAllBtn = ({ handleDownloadAll }) => {
  return (
    <Button
      variant="outlined"
      color="success"
      onClick={handleDownloadAll}
      startIcon={<FileDownloadIcon />}
    >
      Download All
    </Button>
  );
};

export default DownloadAllBtn;
