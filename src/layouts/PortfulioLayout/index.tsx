import React, { FC } from "react";

import { PortfulioLayoutProps } from "./Types";
import { Box, Grid, AppBar } from "@mui/material";
import Sidebar from "src/widgets/SideBar";

const PortfulioLayout: FC<PortfulioLayoutProps> = ({ children }) => {
  return (
    <>
      {/* 0 6px 24px 0 rgba(0,0,0,.05), 0 0 0 1px rgba(0,0,0,.08) */}
      <Grid container height="100%">
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
