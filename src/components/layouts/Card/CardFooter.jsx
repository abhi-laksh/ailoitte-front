import { Typography } from "@mui/material";
import React from "react";

const CardFooter = ({ description, time }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "0.875rem",
          marginBottom: 1.25,
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.75rem",
        }}
      >
        {time}
      </Typography>
    </>
  );
};

export default CardFooter;
