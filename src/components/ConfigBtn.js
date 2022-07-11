import React from "react";
import { Button, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { FC_VERT } from "./constants";

const ConfigBtn = ({ sx, handleShowConfigForm }) => {
  return (
    <Button
      variant="contained"
      sx={{
        ...FC_VERT,
        p: { xs: 2, sm: 1 },
        borderRadius: { xs: "50%", sm: "10px" },
        textTransform: "none",
        backgroundColor: "#bc3aff",
        ...sx,
        "&:hover, &:active": {
          backgroundColor: "#9900eb",
        },
      }}
      onClick={handleShowConfigForm}
    >
      <SettingsIcon sx={{ fontSize: { xs: "30px", sm: "25px" } }} />
      <Box
        component="span"
        sx={{ display: { xs: "none", md: "inline" }, fontSize: "16px" }}
      >
        Compress
      </Box>
    </Button>
  );
};

export default ConfigBtn;
