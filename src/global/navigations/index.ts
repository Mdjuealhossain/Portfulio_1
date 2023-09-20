// Icons
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/GridOffOutlined";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

import { NavOptions } from "src/global/types";

export const NAVIGATIONS: NavOptions[] = [
  {
    key: "Dashboard1",
    title: "Dashboard",
    navs: [
      {
        key: "Dashboard_Main_Dashboard",
        name: "Main Dashboard",
        href: "/",
        icon: HomeIcon,
      },
      {
        key: "Dashboard_Menu_two_example",
        name: "Menu two example",
        href: "/menutwo",
        icon: BeachAccessIcon,
      },
    ],
  },
  {
    key: "Management",
    title: "Management",
    navs: [
      {
        key: "Management_Menu Label one",
        name: "Menu Label one",
        href: "#",
        icon: AutoGraphOutlinedIcon,
        nested: [
          {
            key: "Management_Menu_Label_two",
            name: "Menu Label two",
            href: "/faq",
            icon: AlignHorizontalCenterIcon,
          },
          {
            key: "Management_Menu_Label_2.2",
            name: "Menu Label 2.2",
            href: "/details/about",
            icon: WorkOutlineIcon,
          },
        ],
      },
      {
        key: "Management_Menu_two_Label_one",
        name: "Menu two Label one",
        href: "",
        icon: ImageIcon,
        nested: [
          {
            key: "Management_Menu_two_Label_2.1",
            name: "Menu two Label 2.1",
            href: "/details/post",
            icon: AspectRatioIcon,
          },
          {
            key: "Management_Menu_two_Label_2.2",
            name: "Menu two Label 2.2",
            href: "/details/about",
            icon: AllInclusiveIcon,
            nested: [
              {
                key: "Management_Menu_two_Label_3.1",
                name: "Menu two Label 3.1",
                href: "/details/aboutas",
                icon: AutoAwesomeMotionIcon,
              },
            ],
          },
        ],
      },
    ],
  },
];
