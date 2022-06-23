import React, { useRef } from "react";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import ImageBox from "./ImageBox";

const FileInputForm = ({ handleFileSelection, handleCompression }) => {
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
    <Box component="form" noValidate autoComplete="off">
      <Grid
        container
        spacing={2}
        m={5}
        mx="auto"
        maxWidth="1000px"
        justifyContent="center"
        alignItems="center"
      >
        <Input
          sx={{ fontSize: "inherit", maxWidth: "60%" }}
          ref={fileInputRef}
          type="file"
          inputProps={{ multiple: true }}
          onChange={handleFileSelection}
        />
        <Button variant="contained" onClick={() => handleCompression(options)}>
          Compress
        </Button>
      </Grid>
    </Box>
  );
};

export default FileInputForm;
