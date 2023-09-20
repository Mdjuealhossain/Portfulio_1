"use client";
import { FC, useState, Fragment } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";

import NestedNavs from "./NestedNavs";
import { NAVIGATIONS } from "src/global/navigations";
import { NavOptions, NavigationOptions } from "src/global/types";
import { SidebarOptions } from "./Types";
import { Avatar, Box, Stack, Typography } from "@mui/material";

const AdminSidebar: FC<SidebarOptions> = () => {
  const [groupCollapse, setGroupCollapse] = useState<string[]>([""]);

  const onHandleCollapse = (navKey: string) => {
    if (!Boolean(groupCollapse.includes(navKey))) {
      setGroupCollapse((prevState: string[]) => [...prevState, navKey]);
      return;
    }
    setGroupCollapse((prevState: string[]) =>
      prevState.filter((d: string) => d !== navKey)
    );
  };

  return (
    <Paper
      square
      sx={(theme) => ({
        width: theme.spacing(32.5),
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      })}
    >
      <Stack direction="row" p={2} alignItems="center">
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={(theme) => ({
            color: theme.palette.primary.main,
            fontWeight: 700,
            border: `3px solid ${theme.palette.primary.main}`,
            width: 40,
            height: 40,
            fontSize: 24,
            borderRadius: 2,
            // mr: 0.5,
          })}
        >
          V
        </Stack>
        <Box
          sx={(theme) => ({
            border: `2px solid ${theme.palette.primary.main}`,
            height: 24,
            fontSize: 18,
            ml: "-2px",
            textTransform: "uppercase",
            borderRadius: "0 6px 6px 0",
            pr: 1,
            pl: 1,
            lineHeight: theme.spacing(2.5),
            letterSpacing: 3,
          })}
        >
          ersh
        </Box>
      </Stack>
      <Stack p={2} direction="row" alignItems="center">
        <Avatar variant="rounded" sx={{ width: 46, height: 46 }}>
          A
        </Avatar>
        <Box pl={1.5}>
          <Typography variant="h6">Ariful islam</Typography>
          <Typography variant="caption">Admin</Typography>
        </Box>
      </Stack>
      <List disablePadding>
        {NAVIGATIONS.map(({ key, title, navs }: NavOptions) => {
          return (
            <Fragment key={key}>
              <ListSubheader
                disableSticky
                onClick={() => onHandleCollapse(key)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <Typography variant="overline">{title}</Typography>
              </ListSubheader>
              <Collapse in={Boolean(!groupCollapse.includes(key))}>
                {navs.map((navigation: NavigationOptions) => (
                  <NestedNavs key={navigation.key} navigation={navigation} />
                ))}
              </Collapse>
            </Fragment>
          );
        })}
      </List>
    </Paper>
  );
};

export default AdminSidebar;
