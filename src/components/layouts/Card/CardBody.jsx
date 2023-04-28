import { Box } from "@mui/material";
import React from "react";
import {
    AlertIcon,
    BookmarkIcon,
    FaceSmileIcon,
    MessageIcon,
    StarIcon,
} from "../../../utils/icons";
import { TestImg } from "../../../utils/images";
import CardInsights from "./CardInsights";

const CardBody = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          margin: (theme) => theme.spacing(1.75, 0),

          "& >img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          },
        }}
      >
        <img src={TestImg} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 1.75,
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardInsights text="3k" iconUrl={FaceSmileIcon} />
          <CardInsights text="3k" iconUrl={MessageIcon} />
          <CardInsights iconUrl={StarIcon} />
        </Box>

        <Box
          sx={{
            display: "flex",
            fontSize: "1.25rem",

            "& img": {
              width: "1em",
              height: "1em",
            },
          }}
        >
          <CardInsights text="Give" iconUrl={AlertIcon} />
          <img src={BookmarkIcon} />
        </Box>
      </Box>
    </>
  );
};

export default CardBody;
