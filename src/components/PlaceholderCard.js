import React from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const PlaceholderCard = ({ animation }) => {
  return (
    <Card
      sx={{ display: "flex", width: "100%", gap: "12px", alignItems: "center" }}
    >
      <Skeleton
        animation={animation}
        variant="rectangular"
        width="150px"
        height="100px"
      />
      <Box component="div" sx={{ flex: "1" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignSelf: "center",
            pt: "2",
          }}
        >
          <Skeleton animation={animation} variant="text" width="80%" />
          <Skeleton animation={animation} variant="text" width="60%" />
          <Skeleton animation={animation} variant="text" width="25%" />
          <Skeleton animation={animation} variant="text" width="40%" />
        </Box>
      </Box>
    </Card>
  );
};

export default PlaceholderCard;
