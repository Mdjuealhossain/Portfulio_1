import { FC } from "react";
import { SidebarProps } from "./Types";
import { Box, ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import Sidebars from "../Sidbars";
import HomeIcon from "@mui/icons-material/Home";
import { sidebarData } from "src/app/componentSata/sidebarData";

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Stack>
      <Box textAlign="center">
        <Typography variant="h4">My Project</Typography>
      </Box>
      <Stack>
        {sidebarData.map((data) => {
          const { id, item, icon, link } = data;
          return <Sidebars key={id} icon={icon} item={item} link={link} />;
        })}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
