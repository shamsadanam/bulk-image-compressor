import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadAllBtn = ({ handleDownloadAll, disabled }) => {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={handleDownloadAll}
      sx={{
        fontSize: "16px",
        textTransform: "none",
        borderRadius: { xs: "50%", sm: "10px" },
        p: { xs: 2, sm: 1 },
      }}
      disabled={disabled}
    >
      <FileDownloadIcon sx={{ fontSize: { xs: "30px", sm: "25px" } }} />
      <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
        Zip
      </Box>
    </Button>
  );
};

export default DownloadAllBtn;
