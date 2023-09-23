"use client";
import React, { FC, useContext } from "react";

import { Box, Grid, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Sidebar from "src/widgets/SideBar";
import Header from "src/widgets/Header";
import { ColorModeContext } from "src/theme";

import { PortfulioLayoutProps } from "./Types";

const MuiBox = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <Box
      position="absolute"
      right={0}
      top="50%"
      width={60}
      height={50}
      sx={(theme) => ({
        bgcolor: theme.palette.success.light,
        display: { xs: "none", lg: "flex" },
      })}
      justifyContent="center"
      alignItems="center"
      borderRadius="32px 0 0 32px"
    >
      <IconButton>
        <DarkModeIcon onClick={toggleColorMode} />
      </IconButton>
    </Box>
  );
};

const PortfulioLayout: FC<PortfulioLayoutProps> = ({ children }) => {
  return (
    <>
      <MuiBox />
      <Grid container sx={{ display: { lg: "none" } }}>
        <Grid item xs={12} height={70}>
          <Header />
        </Grid>
      </Grid>
      <Grid
        container
        height="100%"
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <Grid item width={270}>
          <Sidebar />
        </Grid>
        <Grid item width="calc(100% - 270px)">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default PortfulioLayout;
