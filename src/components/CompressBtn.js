import React from "react";
import { Button, Box } from "@mui/material";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";

import { FC_VERT } from "./constants";

const CompressBtn = ({ handleCompression, options, disabled }) => {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={() => handleCompression(options)}
      sx={{
        ...FC_VERT,
        p: { xs: 2, sm: 1 },
        borderRadius: { xs: "50%", sm: "10px" },
        textTransform: "none",
      }}
      disabled={disabled}
    >
      <ZoomInMapIcon sx={{ fontSize: { xs: "30px", sm: "25px" } }} />
      <Box
        component="span"
        sx={{ display: { xs: "none", sm: "inline" }, fontSize: "16px" }}
      >
        Compress
      </Box>
    </Button>
  );
};

export default CompressBtn;
