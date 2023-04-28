import { Box } from "@mui/material";
import React from "react";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = ({ data }) => {
  return (
    <Box
      sx={{
        boxShadow: "0 0 0.625rem 0 #eee",
        padding: 2,
        borderRadius: 2,
        maxWidth: "320px",
        margin: (theme) => theme.spacing(0, 2),
      }}
    >
      <CardHeader
        name={data?.user?.name}
        address={data?.user?.address}
        profilePicUrl={`http://localhost:3000/${data?.user?.profile_pic}`}
      />

      <CardBody />

      <CardFooter
        description={
          data?.description ||
          "Sidebar has been collecting the best design links of the day since."
        }
        time={data?.time || "21m ago"}
      />
    </Box>
  );
};

export default Card;
