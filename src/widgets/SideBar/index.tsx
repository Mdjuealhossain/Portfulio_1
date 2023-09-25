import { FC } from "react";

import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import Sidebars from "../Sidbars";
import { sidebarData } from "src/app/componentSata/sidebarData";

import { SidebarProps } from "./Types";

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        display: "flex",
        height: "100%",
        width: 270,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ pt: 18, px: 5 }}>
        <Box sx={{ pl: 1 }}>
          <Link href="/" variant="h3" color="text.primary">
            Project
          </Link>
        </Box>
        <Stack sx={{ pt: 5, pb: 6.25 }}>
          {sidebarData.map((data) => {
            const { id, item, icon, link } = data;
            return <Sidebars key={id} icon={icon} item={item} link={link} />;
          })}
        </Stack>
      </Stack>
      <Box textAlign="center" color="text.secondary">
        <Typography variant="caption">{"Copyright © "}</Typography>
        <Link variant="caption" href="https://your-website.com/">
          Versh
        </Link>
        <Typography variant="caption">
          {" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Sidebar;
