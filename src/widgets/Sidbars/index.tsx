"use client";
import React, { FC } from "react";

import { Box, IconButton, Typography } from "@mui/material";

import { SidebarsProps } from "./Types";

const Sidebars: FC<SidebarsProps> = ({ item, link, icon }) => {
  return (
    <Box display="flex" alignItems="center" color="text.secondary">
      <IconButton>{icon}</IconButton>
      <Typography variant="body2">{item}</Typography>
    </Box>
  );
};

export default Sidebars;
