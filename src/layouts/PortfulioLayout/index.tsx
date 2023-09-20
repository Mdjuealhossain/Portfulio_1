import React, { FC } from "react";

import { PortfulioLayoutProps } from "./Types";
import { Box, Grid } from "@mui/material";

const PortfulioLayout: FC<PortfulioLayoutProps> = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item>Sidebar</Grid>
      </Grid>
      <Grid container>
        <Grid item>{children}</Grid>
      </Grid>
      <Grid container>
        <Grid item>Footer</Grid>
      </Grid>
    </>
  );
};

export default PortfulioLayout;
