import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

export const sidebarData = [
  {
    id: "1",
    item: "Home",
    link: "/",
    icon: <HomeIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: "2",
    item: "About",
    link: "/",
    icon: <Person4Icon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: "3",
    item: "Service",
    link: "/",
    icon: <SettingsIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: "4",
    item: "Portfolio",
    link: "/",
    icon: <BusinessCenterIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: "5",
    item: "News",
    link: "/",
    icon: <DescriptionIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: "6",
    item: "Contact",
    link: "/",
    icon: <LocalPostOfficeIcon sx={{ height: 20, width: 20 }} />,
  },
];
