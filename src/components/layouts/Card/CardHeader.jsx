import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { DotsIcon } from "../../../utils/icons";

const CardHeader = ({ name, address, profilePicUrl, onClickMenu }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar src={profilePicUrl} />
      <Box
        sx={{
          padding: " 0 0.375rem",
          flex: "1 1 auto",
        }}
      >
        <Typography
          sx={{
            color: "#1570EF",
            fontSize: "0.875rem",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#010101",
            fontSize: "0.75rem",
          }}
        >
          {address}
        </Typography>
      </Box>

      <IconButton onClick={onClickMenu}>
        <img src={DotsIcon} />
      </IconButton>
    </Box>
  );
};

export default CardHeader;
