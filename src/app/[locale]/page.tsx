"use client";
import React from "react";

import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import HeroBanner from "src/widgets/Herobanner";

const App = () => {
  return (
    <Grid container height="100%" px={4}>
      <Grid item lg={6} xs={10} sx={{ marginX: { xs: "auto" } }}>
        <HeroBanner />
      </Grid>
      <Grid item lg={6} sx={{ display: { xs: "none", lg: "inline" } }}>
        <Stack height="100%" justifyContent="center" alignItems="center">
          <Box
            p={3}
            sx={(theme) => ({
              border: `10px solid ${theme.palette.primary.light}`,
            })}
          >
            <Image
              src="https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/57183841_350708698896126_7610830156164235264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFaElRGqUVej9W3pHRzUJYzekZmaJR7xdZ6RmZolHvF1s_RFSaCIhmJ_z_gS4uUbj4a_8ibG42oZlFVJ_U8AMvQ&_nc_ohc=AayQ2jksRZYAX8DVEQE&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAnLLsyMymVy8SGuIlMpzpiAJ2xQgEygxce96inEEcTgQ&oe=6537C73C"
              alt="me"
              height={430}
              width={370}
            ></Image>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default App;
