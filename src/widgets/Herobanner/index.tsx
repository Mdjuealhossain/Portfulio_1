"use client";
import { FC } from "react";

import { Box, Link, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { HeroBannerProps } from "./Types";

const HeroBanner: FC<HeroBannerProps> = () => {
  return (
    <Stack height="100%" justifyContent="center">
      <Box mb={3.75}>
        <Typography variant="h2">
          HI,IM JUEAL! CREATIVE
          <Box sx={(theme) => ({ color: theme.palette.primary.light })}>
            <Typography variant="h2" sx={{ fontSize: 55 }}>
              Developer
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Stack mb={8.125} color="text.secondary">
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut
          doloremque consequuntur! Minima nisi ea, sapiente quo quibusdam
          distinctio sed ex accusantium ullam suscipit reprehenderit velit iure
          reiciendis quaerat laboriosam sint illo ut nihil minus quia? Nihil
          incidunt saepe ducimus qui commodi. Nostrum, ab ipsum doloremque
          quidem ex maxime quas!
        </Typography>
      </Stack>
      <Stack flexWrap="wrap" alignItems="center" my={3.5} flexDirection="row">
        <Link
          href="#"
          px={5}
          py={2.5}
          mr={3.75}
          justifyContent="center"
          alignItems="center"
          display="flex"
          gap={1.275}
          sx={(theme) => ({
            bgcolor: theme.palette.primary.light,
            color: theme.palette.common.black,
          })}
        >
          <Typography>Download</Typography>
          <DownloadIcon />
        </Link>
        <Link
          href="#"
          justifyContent="center"
          alignItems="center"
          gap={1.275}
          display="flex"
        >
          <PlayCircleIcon
            sx={(theme) => ({
              color: theme.palette.primary.light,
              height: 50,
              width: 50,
            })}
          />
          <Typography color="text.primary">Watch the video</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default HeroBanner;
