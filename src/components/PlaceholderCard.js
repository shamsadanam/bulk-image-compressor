import React from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const PlaceholderCard = ({ animation }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        gap: "12px",
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Skeleton
        animation={animation}
        variant="rectangular"
        sx={{
          width: { xs: "100%", lg: "250px" },
          height: "auto",
          aspectRatio: "16/9",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          p: 1,
          flex: "1",
        }}
      >
        <Skeleton animation={animation} variant="text" width="80%" />
        <Skeleton animation={animation} variant="text" width="60%" />
        <Skeleton animation={animation} variant="text" width="25%" />
        <Skeleton animation={animation} variant="text" width="40%" />
      </Box>
    </Card>
  );
};

export default PlaceholderCard;
