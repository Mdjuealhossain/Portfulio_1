import React, { FC } from "react";

import { PortfulioLayoutProps } from "./Types";
import { Box, Grid, AppBar, Card } from "@mui/material";
import Sidebar from "src/widgets/SideBar";
import Header from "src/widgets/Header";

const PortfulioLayout: FC<PortfulioLayoutProps> = ({ children }) => {
  return (
    <>
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
