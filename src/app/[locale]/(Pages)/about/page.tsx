import { FC } from "react";

import { Grid } from "@mui/material";
import AboutHeader from "src/widgets/AboutHeader";
import AboutMain from "src/widgets/AboutMain";

import { AboutProps } from "./Types";

const About: FC<AboutProps> = () => {
  return (
    <Grid container maxWidth={1320} marginX="auto" px={6} py={12}>
      <Grid item xs={12}>
        <AboutHeader />
      </Grid>
      <Grid item xs={12}>
        <AboutMain />
      </Grid>
    </Grid>
  );
};

export default About;
