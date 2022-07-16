import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import LabelIcon from "@mui/icons-material/Label";

import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

import { Button } from "@mui/material";

import visitors from "../users";
import tags from "../tags";
import places from "../places";
import badges from "../badges";
import items from "../items";

import { BiMenu } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

import SubMenu from "./SubMenu";

type MenuName = "menuCatalog" | "menuCustomers" | "menuNotifications";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuNotifications: false,
    menuCustomers: true,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      {/* <DashboardMenuItem /> */}

      <SubMenu
        handleToggle={() => handleToggle("menuCustomers")}
        isOpen={state.menuCustomers}
        name="Resources"
        icon={<BiMenu />}
        dense={dense}
      >
        <MenuItemLink
          to="/users"
          state={{ _scrollToTop: true }}
          primaryText="users"
          leftIcon={<visitors.icon />}
          dense={dense}
        />

        <MenuItemLink
          to="/items"
          state={{ _scrollToTop: true }}
          primaryText="items"
          leftIcon={<items.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/places"
          state={{ _scrollToTop: true }}
          primaryText="places"
          leftIcon={<places.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/badges"
          state={{ _scrollToTop: true }}
          primaryText="badges"
          leftIcon={<badges.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/tags"
          state={{ _scrollToTop: true }}
          primaryText="tags"
          leftIcon={<tags.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/notifications"
          state={{ _scrollToTop: true }}
          primaryText="notifications"
          leftIcon={<GrNotification />}
          dense={dense}
        />
      </SubMenu>
      {/* <MenuItemLink
                to="/reviews"
                state={{ _scrollToTop: true }}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                dense={dense}
            /> */}
    </Box>
  );
};

export default Menu;
