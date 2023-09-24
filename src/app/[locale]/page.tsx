"use client";
import React from "react";

import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import HeroBanner from "src/widgets/Herobanner";

const App = () => {
  return (
    <Grid container height="100%" px={4}>
      <Grid item xs={6}>
        <HeroBanner />
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Box>
            <Image
              src="https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/87013317_532129504087377_2659132854180511744_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHNlQJriL3fTqU8wZZk8JjZnHSrE5Wj5BycdKsTlaPkHJG6o1vm5ua0Alh3Ijl4cddBBSCdbXLDJhVcbf8bSg2l&_nc_ohc=fJjOpxWRWNMAX9_dHog&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAYDmtf8--hBlBnsfDtds1KD2Hdm90FM2H8T95Bd5JoFw&oe=6537A338"
              alt="me"
              height={100}
              width={100}
            ></Image>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default App;
