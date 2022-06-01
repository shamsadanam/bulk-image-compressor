import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import Grid from "@mui/material/Grid";
import FileInputForm from "./FileInputForm";
import ImageBox from "./ImageBox";

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState("");
  const [compressedFiles, setCompressedFiles] = useState("");

  const handleFileSelection = (e) => {
    setSelectedFiles(e.target.files[0]);
  };

  const handleCompression = async (options) => {
    console.log("compressing");
    try {
      const compressedFile = await imageCompression(selectedFiles, options);
      setCompressedFiles(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid
      container
      sx={{ maxWidth: "80vw", mx: "auto" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {console.log("app rendered")}
      <Grid item xs={12}>
        <FileInputForm
          handleFileSelection={handleFileSelection}
          handleCompression={handleCompression}
        />
      </Grid>
      <Grid item xs={6}>
        <ImageBox file={selectedFiles} />
      </Grid>
      <Grid item xs={6}>
        <ImageBox file={compressedFiles} compressed />
      </Grid>
    </Grid>
  );
};

export default App;
