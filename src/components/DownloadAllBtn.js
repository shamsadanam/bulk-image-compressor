import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadAllBtn = ({ handleDownloadAll, sx }) => {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={handleDownloadAll}
      sx={{
        fontSize: "16px",
        textTransform: "none",
        borderRadius: { xs: "10px" },
        ...sx,
      }}
    >
      <FileDownloadIcon sx={{ fontSize: { xs: "30px", sm: "25px" } }} />
      <Box component="span">Download All</Box>
    </Button>
  );
};

export default DownloadAllBtn;
