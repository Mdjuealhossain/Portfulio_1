"use client";
import { FC } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { AboutHeader } from "./Types";

const AboutHeader: FC<AboutHeader> = () => {
  return (
    <Stack textAlign="center" mb={6} position="relative">
      <Typography sx={{ opacity: 0.1 }} variant="h1">
        About Me
      </Typography>
      <Box position="absolute" top={71} left="40%">
        <Typography variant="h3">Know Me More</Typography>
        <Box
          component="span"
          display="block"
          width={10}
          mt={1}
          sx={(theme) => ({
            borderBottom: `3px solid ${theme.palette.primary.light}`,
            width: 80,
            marginX: "auto",
          })}
        ></Box>
      </Box>
    </Stack>
  );
};

export default AboutHeader;
