import { FC } from "react";
import { SidebarProps } from "./Types";
import { Box, ButtonBase, Link, Paper, Stack, Typography } from "@mui/material";
import Sidebars from "../Sidbars";
import HomeIcon from "@mui/icons-material/Home";
import { sidebarData } from "src/app/componentSata/sidebarData";

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ pt: 18, px: 5 }}>
        <Box sx={{ pl: 1 }}>
          <Typography variant="h3">Project</Typography>
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
