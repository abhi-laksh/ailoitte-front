import { Box, Typography } from "@mui/material";
import React from "react";

const CardInsights = ({ iconUrl, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginRight: "0.5rem",
        alignItems: "center",
      }}
    >
      <img src={iconUrl} />
      <Typography
        sx={{
          fontSize: "0.75rem",
          color: "#010101",
          marginLeft: 0.5,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CardInsights;
