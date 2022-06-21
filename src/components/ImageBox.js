import React, { useState, useRef, useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import InfoBox from "./InfoBox";
import Badge from "./Badge";
import DownloadBtn from "./DownloadBtn";

const ImageBox = ({ file }) => {
  const { source, name, size, selected, compressed } = file;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef("");

  const showPlaceholderTexts = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignSelf: "center",
          pt: "2",
        }}
      >
        <Skeleton animation={"wave"} variant="text" width="80%" />
        <Skeleton animation={"wave"} variant="text" width="60%" />
        <Skeleton animation={"wave"} variant="text" width="25%" />
        <Skeleton animation={"wave"} variant="text" width="40%" />
      </Box>
    );
  };

  useEffect(() => {
    // source
    //   ? selected
    //     ? console.log("Selected Image just rendered")
    //     : console.log("Compressed Image just rendered")
    //   : console.log("Default Image just rendered");
  });

  const handleLoaded = () => {
    setLoaded(true);
  };

  const renderImg = (source) => {
    console.log("rendering img");
    return (
      <CardMedia
        ref={imgRef}
        component="img"
        image={source instanceof Blob ? URL.createObjectURL(source) : source}
        alt={name}
        sx={{ maxWidth: "150px" }}
        onLoad={handleLoaded}
      />
    );
  };

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        "&:hover": { cursor: "pointer" },
      }}
    >
      {(selected || compressed) && (
        <Badge
          content={compressed ? "Compressed" : "Original"}
          color={compressed ? "green" : "amber"}
          position={{ top: 0, right: 0 }}
        />
      )}
      {useMemo(() => renderImg(source), [source])}
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: "1",
          py: 1,
          px: 2,
          "&:last-child": { pb: 1 },
        }}
      >
        {loaded ? (
          <InfoBox size={size} name={name.slice(0, 15)} el={imgRef.current} />
        ) : (
          showPlaceholderTexts()
        )}
        {compressed && (
          <DownloadBtn
            sx={{ alignSelf: "end" }}
            source={
              source instanceof Blob ? URL.createObjectURL(source) : source
            }
            name={`compressed-${name}`}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ImageBox;
