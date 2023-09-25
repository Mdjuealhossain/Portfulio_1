"use client";
import { FC } from "react";

import { IconButton, Link, Typography } from "@mui/material";

import { SidebarsProps } from "./Types";

const Sidebars: FC<SidebarsProps> = ({ item, link, icon }) => {
  return (
    <Link
      display="flex"
      alignItems="center"
      color="text.secondary"
      href={`${link}`}
    >
      <IconButton>{icon}</IconButton>
      <Typography variant="body2">{item}</Typography>
    </Link>
  );
};

export default Sidebars;
