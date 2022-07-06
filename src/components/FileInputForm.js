import React, { useRef } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";

import { FC_VERT, F_BETWEEN } from "./constants";

const FileInputForm = ({
  handleFileSelection,
  handleCompression,
  hasFiles,
}) => {
  const fileInputRef = useRef("");
  // const [options, setOptions] = useState({
  //   maxSizeMB: 1,
  //   maxWidthOrHeight: 1920,
  //   useWebWorker: true,
  // });

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1600,
    useWebWorker: true,
  };

  return (
    <Box
      sx={{
        position: { xs: "fixed", sm: "static" },
        top: "85vh",
        right: "0px",
        left: "0px",
        ...F_BETWEEN,
        width: { xs: "90%", sm: "auto" },
        flex: "1",
        mx: "auto",
        zIndex: 99,
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <FormGroup
        row
        sx={{
          alignItems: "center",
          justifyContent: { xs: "end", sm: "space-between" },
        }}
      >
        <InputLabel
          htmlFor="upload"
          sx={{
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
          }}
        >
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
        <Input
          id="upload"
          sx={{
            fontSize: "inherit",
            maxWidth: "60%",
            display: { xs: "none" },
          }}
          ref={fileInputRef}
          type="file"
          accept="image/*"
          inputProps={{ multiple: true }}
          onChange={handleFileSelection}
        />
      </FormGroup>
      {hasFiles && (
        <Button
          variant="contained"
          color="success"
          onClick={() => handleCompression(options)}
          sx={{
            ...FC_VERT,
            ml: "auto",
            p: { xs: 2, sm: 1 },
            borderRadius: { xs: "50%", sm: "10px" },
            textTransform: "none",
          }}
        >
          <ZoomInMapIcon sx={{ fontSize: { xs: "30px", sm: "25px" } }} />
          <Box
            component="span"
            sx={{ display: { xs: "none", sm: "inline" }, fontSize: "16px" }}
          >
            Compress
          </Box>
        </Button>
      )}
    </Box>
  );
};

export default FileInputForm;
