import { FC } from "react";

import { AboutProps } from "./Types";
import { Grid } from "@mui/material";

const About: FC<AboutProps> = () => {
  return (
    <Grid>
      <Grid>AboutHeader</Grid>
      <Grid>AboutMain</Grid>
    </Grid>
  );
};

export default About;
