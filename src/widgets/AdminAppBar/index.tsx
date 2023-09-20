import { useMemo, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Box, Stack, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { ColorModeContext } from "src/theme";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

const AdminAppBar = ({
  params,
}: {
  params: {
    locale?: string;
  };
}) => {
  const themes = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  const lang = useMemo(() => {
    if (params.locale === undefined || params.locale === "en") {
      return "us";
    }
    return params.locale;
  }, [params.locale]);

  return (
    <AppBar
      color="default"
      elevation={0}
      sx={(theme) => ({
        left: theme.spacing(32.5),
        width: "auto",
      })}
    >
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon fontSize="small" />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 1, mr: 3 }}
        >
          <AppsOutlinedIcon color="primary" fontSize="small" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Stack direction="row" alignItems="center" sx={{ cursor: "pointer" }}>
            <IconButton edge="start" color="default" aria-label="menu">
              <SearchOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography variant="body1" color="text.secondary">
              Search (Ctrl+/)
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row" mr={0.5}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={(theme) => ({
              width: theme.spacing(4.5),
              height: theme.spacing(4.5),
              // p: 2,
              cursor: "pointer",
            })}
          >
            <span className={`fi fi-${lang}`}></span>
          </Stack>
          <IconButton onClick={toggleColorMode} color="inherit" sx={{ ml: 2 }}>
            {themes.palette.mode === "light" ? (
              <BedtimeOutlinedIcon fontSize="small" />
            ) : (
              <LightModeOutlinedIcon fontSize="small" />
            )}
          </IconButton>
          <IconButton color="inherit" sx={{ mx: 2 }}>
            <MailOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsNoneIcon fontSize="small" />
          </IconButton>
        </Stack>
        <IconButton>
          <Avatar>A</Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AdminAppBar;
