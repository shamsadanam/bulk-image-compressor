import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoBox from "./InfoBox";

const PLACEHOLDER_IMG = require("../assets/img/placeholder.png");

const ImageBox = ({ file, compressed }) => {
  const [imgMeta, setImgMeta] = useState({
    imgLoaded: false,
    size: "",
    dimensions: "",
  });
  // console.log(file && URL.createObjectURL(file));
  const imgRef = useRef("");
  const handleImgLoad = () => {
    setImgMeta({
      ...imgMeta,
      imgLoaded: true,
      size: file.size,
      dimensions: `${imgRef.current.naturalWidth}x${imgRef.current.naturalHeight}`,
    });
  };
  return (
    <Box
      sx={{
        position: "relative",
        "& .downloadIcon": { opacity: 0, transition: "opacity .2s ease-in" },
        "&:hover .downloadIcon": { opacity: 1 },
      }}
    >
      <Box
        ref={imgRef}
        component="img"
        src={file ? URL.createObjectURL(file) : PLACEHOLDER_IMG}
        alt={file ? file.name : "placeholder-image"}
        sx={{ maxWidth: "100%" }}
        onLoad={() => handleImgLoad()}
      />
      {imgMeta.imgLoaded && imgRef.current.alt !== "placeholder-image" && (
        <InfoBox size={imgMeta.size} dimensions={imgMeta.dimensions} />
      )}
      {compressed && file && (
        <IconButton
          className="downloadIcon"
          href={URL.createObjectURL(file)}
          download
          aria-label="download"
          color="success"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <FileDownloadIcon fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default ImageBox;
