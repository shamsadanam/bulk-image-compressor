import React from "react";
import Stack from "@mui/material/Stack";
import ImageBox from "./ImageBox";
import PlaceholderCard from "./PlaceholderCard";

const ImageGrid = ({ files }) => {
  if (files.length === 0) return <PlaceholderCard animation={"wave"} />;
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {files.map((file) => (
        <ImageBox
          key={files.compressed ? `compressed-${file.id}` : file.id}
          file={file}
        />
      ))}
    </Stack>
  );
};

export default ImageGrid;
