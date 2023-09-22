import { FC, useState, useContext } from "react";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { HeaderProps } from "./Types";
import { Drawer } from "@mui/material";
import Sidebar from "../SideBar";
import { ColorModeContext } from "src/theme";

const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  // "use client";
  // import React, { useState } from "react";
  // import { Box, Button, Drawer } from "@mui/material";
  // import Sidebars from "src/widgets/Sidbars";
  // import Sidebar from "src/widgets/SideBar";

  // const App = () => {
  //   const [open, setOpen] = useState(false);

  //   return (
  //     <Box>
  //       <Button
  //         onClick={() => {
  //           setOpen(true);
  //         }}
  //       >
  //         Button
  //       </Button>
  //       <Drawer
  //         anchor="left"
  //         open={open}
  //         onClose={() => {
  //           setOpen(false);
  //         }}
  //       >
  //         <Sidebar />
  //       </Drawer>
  //     </Box>
  //   );
  // };

  // export default App;
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <AppBar color="inherit">
      <Toolbar>
        <Typography sx={{ letterSpacing: 3 }} variant="h3" flexGrow={1}>
          PORT
        </Typography>
        <IconButton onClick={toggleColorMode}>
          <DarkModeIcon />
        </IconButton>
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
