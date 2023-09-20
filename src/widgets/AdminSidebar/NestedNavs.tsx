"use client";
import { FC, useState, Fragment } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
import { useRouter, usePathname } from "next/navigation";

import { NavigationOptions } from "src/global/types";
import { NestedNavOptioms } from "./Types";

const DEFUALT_NESTED_LEFT_PADDING: number = 1;

const NestedNavs: FC<NestedNavOptioms> = ({ navigation, nested = 2 }) => {
  const { icon: NavIcon } = navigation;

  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const path = usePathname();

  const onNavigationHandle = (href: string, isNested: boolean) => {
    if (isNested) {
      setOpen((prevState: boolean) => !prevState);
      return;
    }
    router.push(href);
  };

  return (
    <Fragment key={navigation.key}>
      <ListItemButton
        onClick={() =>
          onNavigationHandle(navigation.href, Boolean(navigation.nested))
        }
        sx={{
          pl: nested,
          py: 0,
        }}
      >
        <ListItemIcon
          sx={(theme) => ({
            color:
              navigation.href === path
                ? theme.palette.text.primary
                : theme.palette.text.secondary,
            minWidth: theme.spacing(4),
          })}
        >
          <NavIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ variant: "subtitle1" }}
          primary={navigation.name}
          sx={{
            color: (theme) =>
              navigation.href === path
                ? theme.palette.text.primary
                : theme.palette.text.secondary,
          }}
        />

        {Boolean(navigation.nested) && (
          <KeyboardArrowRight
            sx={{
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
              transition: "0.2s",
              color: (theme) => theme.palette.text.secondary,
            }}
          />
        )}
      </ListItemButton>
      {Boolean(navigation.nested) && (
        <Collapse in={open}>
          <List disablePadding>
            {navigation?.nested?.map((nest: NavigationOptions) => {
              if (!Boolean(nest.nested)) {
                const { icon: NestIcon } = nest;
                return (
                  <ListItemButton
                    key={nest.key}
                    onClick={() =>
                      onNavigationHandle(nest.href, Boolean(nest.nested))
                    }
                    sx={{
                      pl: nested + DEFUALT_NESTED_LEFT_PADDING,
                      py: 0,
                    }}
                  >
                    <ListItemIcon
                      sx={(theme) => ({
                        color:
                          nest.href === path
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                        minWidth: theme.spacing(4),
                      })}
                    >
                      <NestIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ variant: "subtitle1" }}
                      primary={nest.name}
                      sx={{
                        color: (theme) =>
                          nest.href === path
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                      }}
                    />
                  </ListItemButton>
                );
              }
              return (
                <NestedNavs
                  key={nest.key}
                  navigation={nest}
                  nested={nested + DEFUALT_NESTED_LEFT_PADDING}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </Fragment>
  );
};

export default NestedNavs;
