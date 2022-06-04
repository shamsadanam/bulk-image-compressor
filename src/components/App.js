import React, { useState, useEffect, useRef } from "react";
import imageCompression from "browser-image-compression";
import Grid from "@mui/material/Grid";
import FileInputForm from "./FileInputForm";
import ImageBox from "./ImageBox";

const PLACEHOLDER_IMG = require("../assets/img/placeholder.png");

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState({
    fileURL: PLACEHOLDER_IMG,
    fileName: "placeholder-img",
    fileSize: 0,
  });
  const [compressedFiles, setCompressedFiles] = useState({
    fileURL: PLACEHOLDER_IMG,
    fileName: "placeholder-img",
    fileSize: 0,
    compressed: false,
  });

  const handleFileSelection = (e) => {
    const fileURL = e.target.files[0];
    const fileName = e.target.files[0].name;
    const fileSize = e.target.files[0].size;

    setSelectedFiles({
      ...selectedFiles,
      fileURL: fileURL,
      fileName: fileName,
      fileSize: fileSize,
    });
  };

  const handleCompression = async (options) => {
    try {
      const compressedFileURL = await imageCompression(
        selectedFiles.fileURL,
        options
      );
      setCompressedFiles({
        ...compressedFiles,
        fileURL: compressedFileURL,
        fileName: `${selectedFiles.fileName}-compressed`,
        fileSize: compressedFileURL.size,
      });
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
      <Grid item xs={12}>
        <FileInputForm
          handleFileSelection={handleFileSelection}
          handleCompression={handleCompression}
        />
      </Grid>
      <Grid item xs={6}>
        <ImageBox
          fileURL={selectedFiles.fileURL}
          fileName={selectedFiles.fileName}
          fileSize={selectedFiles.fileSize}
        />
      </Grid>
      <Grid item xs={6}>
        <ImageBox
          fileURL={compressedFiles.fileURL}
          fileName={compressedFiles.fileName}
          fileSize={compressedFiles.fileSize}
          compressed={compressedFiles.compressed}
        />
      </Grid>
    </Grid>
  );
};

export default App;
