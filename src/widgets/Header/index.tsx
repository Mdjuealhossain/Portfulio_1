import { FC } from "react";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { HeaderProps } from "./Types";

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar color="inherit">
      <Toolbar>
        <Typography sx={{ letterSpacing: 3 }} variant="h3" flexGrow={1}>
          PORT
        </Typography>
        <IconButton>
          <DarkModeIcon />
        </IconButton>
        <IconButton>
          <ViewHeadlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
