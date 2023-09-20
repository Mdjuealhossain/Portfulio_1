import React, { FC } from "react";

import { PortfulioLayoutProps } from "./Types";
import { Box, Grid } from "@mui/material";
import Sidebar from "src/widgets/SideBar";

const PortfulioLayout: FC<PortfulioLayoutProps> = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item width={310}>
          <Sidebar />
        </Grid>
        <Grid item width="calc(100% - 310px)" bgcolor="red">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default PortfulioLayout;
