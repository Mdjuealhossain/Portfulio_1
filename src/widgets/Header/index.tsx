import { FC, useState, useContext } from "react";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../SideBar";
import { ColorModeContext } from "src/theme";

import { HeaderProps } from "./Types";

const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;

  return (
    <AppBar color="inherit">
      <Toolbar>
        <Typography sx={{ letterSpacing: 3 }} variant="h3" flexGrow={1}>
          PORT
        </Typography>
        <IconButton onClick={toggleColorMode}>{mode}</IconButton>
        <IconButton onClick={() => setOpen(true)}>
          <ViewHeadlineIcon />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)} elevation={0}>
          <Sidebar />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
