import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoBox from "./InfoBox";

const PLACEHOLDER_IMG = require("../assets/img/placeholder.png");

const ImageBox = ({ file, compressed }) => {
  const [imgMeta, setImgMeta] = useState({
    imgLoaded: false,
    url: file ? URL.createObjectURL(file) : "",
    name: file ? file.name : "placeholder-image",
    size: "",
    dimensions: "",
  });
  // console.log(file && URL.createObjectURL(file));
  const imgRef = useRef("");

  const handleImgLoad = () => {
    console.log("setting img meta");
    setImgMeta({
      ...imgMeta,
      imgLoaded: true,
      size: file.size,
      dimensions: `${imgRef.current.naturalWidth}x${imgRef.current.naturalHeight}`,
    });
  };

  return (
    <Box>
      <Box
        ref={imgRef}
        component="img"
        src={imgMeta.url ? imgMeta.url : PLACEHOLDER_IMG}
        alt={imgMeta.name}
        sx={{ maxWidth: "100%" }}
        onLoad={() => handleImgLoad()}
      />
      {file && <InfoBox size={imgMeta.size} dimensions={imgMeta.dimensions} />}
      {compressed && file && (
        <IconButton
          href={imgMeta.url}
          download
          aria-label="download"
          color="success"
        >
          <FileDownloadIcon fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default ImageBox;
