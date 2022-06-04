import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoBox from "./InfoBox";

const ImageBox = ({ file: { source, name, size, compressed } }) => {
  const [imgMeta, setImgMeta] = useState({
    url: source,
    size: source.size,
    dimensions: "",
  });

  const imgRef = useRef("");

  useEffect(() => {
    console.log("The imagebox just rendered");
    console.log(source);
    if (source instanceof Blob) {
      setImgMeta({ ...imgMeta, url: URL.createObjectURL(source) });
    }
  }, [source]);

  const handleImgLoad = () => {
    // console.log(`Before Revoking URL: ${source}`);
    // URL.revokeObjectURL(source);
    // console.log(`After Revoking URL: ${source}`);
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
        alt={name}
        sx={{ maxWidth: "100%" }}
        onLoad={() => handleImgLoad()}
      />
      {size !== 0 && <InfoBox size={size} dimensions={imgMeta.dimensions} />}
      {compressed && (
        <IconButton
          href={imgMeta.url}
          download={name}
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
