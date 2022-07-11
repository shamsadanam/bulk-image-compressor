import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SiteTitle = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", lg: "80vw" },
        textAlign: "center",
        p: "20px",
        mx: "auto",
        mt: "25px",
        mb: "30px",
        backgroundColor: " hsl(190, 90%, 30%)",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5">Bulk Image Compressor</Typography>
      <Typography variant="subtitle1">By Shamsad Anam</Typography>
    </Box>
  );
};

export default SiteTitle;
