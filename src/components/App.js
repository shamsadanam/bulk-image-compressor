import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import SiteTitle from "./SiteTitle";
import FileInputForm from "./FileInputForm";
import ImageGrid from "./ImageGrid";
import "./App.scss";

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [compressedFiles, setCompressedFiles] = useState([]);

  // const checkSupport = (type) => type.split("/")[0] === "image";

  const handleFileSelection = (supportedFiles) => {
    setSelectedFiles([
      ...supportedFiles.map((image) => {
        return {
          id: uuidv4(),
          source: image,
          name: image.name,
          size: image.size,
          selected: true,
        };
      }),
    ]);
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
      setCompressedFiles([...helper]);
    });
  };

  const handleDownloadAll = () => {
    const folderName = `compressed-images-${Date.now()}.zip`;
    const zip = new JSZip();
    const nestedFolder = zip.folder(folderName);
    compressedFiles.map((file) => {
      return nestedFolder.file(file.name, file.source);
    });
    zip.generateAsync({ type: "blob" }).then((blob) => {
      saveAs(blob, `compressed-images-${Date.now()}.zip`);
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <SiteTitle />
      <FileInputForm
        handleFileSelection={handleFileSelection}
        handleCompression={handleCompression}
        handleDownloadAll={handleDownloadAll}
        hasFiles={selectedFiles.length > 0 ? true : false}
        compressedFiles={compressedFiles}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 5 }}
          sx={{
            maxWidth: {
              xs: "95vw",
              sm: "90vw",
              md: "80vw",
            },
          }}
        >
          <Grid item xs={6}>
            <ImageGrid files={selectedFiles} />
          </Grid>
          <Grid item xs={6}>
            <ImageGrid files={compressedFiles} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;

// fast load npm start
// "start": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
// "build": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
