import React, { useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoBox from "./InfoBox";

const ImageBox = ({ file }) => {
  const { id, source, name, size, selected, compressed } = file;

  const imgRef = useRef("");

  useEffect(() => {
    console.log("ImageBox just rendered");
  });

  // useEffect(() => {
  //   console.log("A new file just rendered");
  // }, [file]);

  const handleImgLoad = () => {};

  return (
    <Box key={id}>
      <Box
        ref={imgRef}
        component="img"
        src={source instanceof Blob ? URL.createObjectURL(source) : source}
        alt={name}
        sx={{ maxWidth: "100%" }}
        onLoad={() => handleImgLoad()}
      />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid xs={6} p={1} item>
          {(selected || compressed) && <InfoBox size={size} name={name} />}
        </Grid>
        <Grid xs={6} p={1} item>
          {compressed && (
            <Button
              href={URL.createObjectURL(source)}
              download={`compressed-${name}`}
              aria-label="download"
              variant="contained"
              fullWidth
              color="success"
              size="medium"
              endIcon={<FileDownloadIcon />}
            >
              Download
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageBox;
