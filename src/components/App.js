import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import Grid from "@mui/material/Grid";
import FileInputForm from "./FileInputForm";
import ImageBox from "./ImageBox";

const PLACEHOLDER_IMG = require("../assets/img/placeholder.png");

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState({
    source: PLACEHOLDER_IMG,
    name: "placeholder-img",
    size: 0,
  });
  const [compressedFiles, setCompressedFiles] = useState({
    source: PLACEHOLDER_IMG,
    name: "placeholder-img",
    size: 0,
    compressed: false,
  });

  const handleFileSelection = (e) => {
    const source = e.target.files[0];
    const name = e.target.files[0].name;
    const size = e.target.files[0].size;

    setSelectedFiles({
      ...selectedFiles,
      source,
      name,
      size,
    });
  };

  const handleCompression = async (options) => {
    try {
      const compressedBlob = await imageCompression(
        selectedFiles.source,
        options
      );
      setCompressedFiles({
        ...compressedFiles,
        source: compressedBlob,
        name: `compressed-${selectedFiles.name}`,
        size: compressedBlob.size,
        compressed: true,
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
        <ImageBox file={selectedFiles} />
      </Grid>
      <Grid item xs={6}>
        <ImageBox file={compressedFiles} />
      </Grid>
    </Grid>
  );
};

export default App;
