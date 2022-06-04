import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoBox from "./InfoBox";

const ImageBox = ({ fileURL, fileName, fileSize, compressed }) => {
  const [imgMeta, setImgMeta] = useState({
    url: fileURL,
    size: fileURL.size,
    dimensions: "",
  });

  const imgRef = useRef("");

  useEffect(() => {
    console.log("The imagebox just rendered");
    // console.log(fileURL);
    if (fileURL instanceof Blob) {
      setImgMeta({ ...imgMeta, url: URL.createObjectURL(fileURL) });
    }
  }, [fileURL]);

  const handleImgLoad = () => {
    // console.log(`Before Revoking URL: ${fileURL}`);
    // URL.revokeObjectURL(fileURL);
    // console.log(`After Revoking URL: ${fileURL}`);
  };

  useEffect(() => {
    setImgMeta({
      ...imgMeta,
      dimensions: `${imgRef.current.naturalWidth}x${imgRef.current.naturalHeight}`,
    });
  }, []);

  return (
    <Box>
      <Box
        ref={imgRef}
        component="img"
        src={imgMeta.url}
        alt={fileName}
        sx={{ maxWidth: "100%" }}
        onLoad={() => handleImgLoad()}
      />
      {fileSize !== 0 && (
        <InfoBox size={fileSize} dimensions={imgMeta.dimensions} />
      )}
      {compressed && (
        <IconButton
          href={fileURL}
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
