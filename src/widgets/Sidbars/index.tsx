import React, { FC } from "react";
import { SidebarsProps } from "./Types";
import { Box, IconButton, Typography } from "@mui/material";

const Sidebars: FC<SidebarsProps> = ({ item, link, icon }) => {
  return (
    <Box>
      <IconButton>{icon}</IconButton>
      <Typography>{item}</Typography>
    </Box>
  );
};

export default Sidebars;
