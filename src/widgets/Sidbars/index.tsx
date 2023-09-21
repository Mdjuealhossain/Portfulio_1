"use client";
import React, { FC } from "react";
import { SidebarsProps } from "./Types";
import { Box, IconButton, Typography } from "@mui/material";

const Sidebars: FC<SidebarsProps> = ({ item, link, icon }) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>{icon}</IconButton>
      <Typography variant="body2">{item}</Typography>
    </Box>
  );
};

export default Sidebars;
