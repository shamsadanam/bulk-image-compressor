import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoBox from "./InfoBox";

const ImageBox = ({ file }) => {
  const { id, source, name, size, selected, compressed } = file;
  // const [imgMeta, setImgMeta] = useState({
  //   url: source,
  //   size: 0,
  //   dimensions: "",
  // });
  // const [imgRes, setImgRes] = useState({
  //   width: 0,
  //   height: 0,
  // });

  const imgRef = useRef("");

  useEffect(() => {
    console.log("The imagebox just rendered");
    // console.log(imgRef.current.naturalWidth);
    // console.log(file);
    // if (source instanceof Blob) {
    //   setImgMeta({
    //     ...imgMeta,
    //     url: URL.createObjectURL(source),
    //     name: name,
    //     size: size,
    //     dimensions: `${imgRef.current.naturalWidth}x${imgRef.current.naturalHeight}`,
    //   });
    // }
  }, [file]);

  const handleImgLoad = () => {
    console.log(
      `${imgRef.current.naturalWidth}x${imgRef.current.naturalHeight}`
    );
  };

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
          {(selected || compressed) && (
            // <InfoBox size={1024000 + 24 * 1024} dimensions={"1200x900px"} />
            <InfoBox
              size={size}
              res={{
                width: imgRef.current.naturalWidth,
                height: imgRef.current.naturalHeight,
              }}
            />
          )}
        </Grid>
        <Grid xs={6} p={1} item>
          {compressed && (
            <Button
              href={source}
              download={name}
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
