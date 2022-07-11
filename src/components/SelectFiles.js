import React from "react";
import { FormGroup, InputLabel, Box, Input } from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";

const SelectFiles = ({ handleFileSelection }) => {
  const inputLabelStyles = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    p: { xs: 2, sm: 1 },
    borderRadius: { xs: "50%", sm: "10px" },
    backgroundColor: "#3af",
    color: "#fff",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#39f",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
  };
  return (
    <FormGroup
      row
      sx={{
        alignItems: "center",
        justifyContent: { xs: "end", sm: "space-between" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputLabel htmlFor="upload" sx={inputLabelStyles}>
          <FileUploadIcon sx={{ fontSize: { xs: "30px", sm: "25px" } }} />
          <Box
            component="span"
            sx={{
              display: { xs: "none", sm: "inline" },
              lineHeight: 0,
              fontSize: "16px",
            }}
          >
            Select Files
          </Box>
        </InputLabel>
        <Box
          component="span"
          sx={{
            display: "none",
            color: "rgba(0, 0, 0, 0.6)",
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em",
            textAlign: "left",
            marginTop: "3px",
            marginRight: "14px",
            marginBottom: "0",
            marginLeft: "14px",
          }}
        >
          Only Images are allowed
        </Box>
      </Box>
      <Input
        id="upload"
        sx={{
          display: { xs: "none" },
        }}
        type="file"
        accept="image/*"
        inputProps={{ multiple: true }}
        onChange={handleFileSelection}
      />
    </FormGroup>
  );
};

export default SelectFiles;
