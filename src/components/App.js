import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";
import Grid from "@mui/material/Grid";
import FileInputForm from "./FileInputForm";
import ImageGrid from "./ImageGrid";
import DownloadAllBtn from "./DownloadAllBtn";

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [compressedFiles, setCompressedFiles] = useState([]);

  useEffect(() => {
    // console.log("Selected: ");
    // console.log(selectedFiles);
    // console.log("Compressed: ");
    // console.log(compressedFiles);
  });

  const handleFileSelection = (e) => {
    const userInputFiles = Object.values(e.target.files).map((file) => {
      return {
        id: uuidv4(),
        source: file,
        name: file.name,
        size: file.size,
        selected: true,
      };
    });

    setSelectedFiles([...selectedFiles, ...userInputFiles]);
  };

  const getCompressedBlob = async (source, options) => {
    try {
      const blob = await imageCompression(source, options);
      return blob;
    } catch (e) {
      console.log(e);
    }
  };
  const handleCompression = (options) => {
    const helper = [];
    const promises = selectedFiles.map(async (file) => {
      return await getCompressedBlob(file.source, options);
    });
    Promise.all(promises).then((blobs) => {
      blobs.map((blob) =>
        helper.push({
          id: uuidv4(),
          source: blob,
          name: blob.name,
          size: blob.size,
          compressed: true,
        })
      );
      setCompressedFiles([...compressedFiles, ...helper]);
    });
  };

  return (
    <Grid
      container
      sx={{ maxWidth: "80vw", mx: "auto" }}
      spacing={2}
      justifyContent="center"
    >
      <Grid item xs={12}>
        <FileInputForm
          handleFileSelection={handleFileSelection}
          handleCompression={handleCompression}
        />
      </Grid>
      <Grid item xs={6}>
        <ImageGrid files={selectedFiles} />
      </Grid>
      <Grid item xs={6}>
        <ImageGrid files={compressedFiles} />
        <DownloadAllBtn files={compressedFiles} />
      </Grid>
    </Grid>
  );
};

export default App;
