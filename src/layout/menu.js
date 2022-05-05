import * as React from "react";
import { ReactNode, createElement } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import lodashGet from "lodash/get";
import DefaultIcon from "@mui/icons-material/ViewList";
import clsx from "clsx";
import {
  useResourceDefinitions,
  useGetResourceLabel,
  useCreatePath,
} from "ra-core";
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
// import { DRAWER_WIDTH, CLOSED_DRAWER_WIDTH } from "./Sidebar";
// import { useSidebarState } from "./useSidebarState";
import { MenuItemLink, DashboardMenuItem, useStore } from "react-admin";
import UserHeaderSidebarWrapper from './UserHeaderSidebarWrapper';
import MainSidebar from './MainSidebar/index';
import AppScrollbar from './AppScrollbar/index';
import VerticalNav from './VerticalNav/index';

const DRAWER_WIDTH = 240;
const CLOSED_DRAWER_WIDTH = 55;

export const Menu = (props) => {
  const resources = useResourceDefinitions();
  const getResourceLabel = useGetResourceLabel();
  const createPath = useCreatePath();
  const {
    hasDashboard,
    dense,
    children = (
      <>
        {hasDashboard && <DashboardMenuItem dense={dense} />}
        {Object.keys(resources)
          .filter((name) => resources[name].hasList)
          .map((name) => (
            <MenuItemLink
              key={name}
              to={createPath({
                resource: name,
                type: "list",
              })}
              // state={{ _scrollToTop: true }}
              primaryText={getResourceLabel(name, 2)}
              leftIcon={
                resources[name].icon ? (
                  createElement(resources[name].icon)
                ) : (
                  <DefaultIcon />
                )
              }
              dense={dense}
            />
          ))}
      </>
    ),
    className,
    ...rest
  } = props;

  const [open] = useStore("sidebar.open", true);
  return (
    <>
      {/* <Root
        className={clsx(
          {
            [MenuClasses.open]: open,
            [MenuClasses.closed]: !open,
          },
          className
        )}
        {...rest}
      >
        {children}
      </Root> */}
      <Hidden xlUp>
        <Drawer
          anchor={props.position}
          open={open}
          // onClose={() => handleToggleDrawer()}
          classes={{
            root: clsx(props.variant),
            paper: clsx(props.variant),
          }}
          style={{position: 'absolute'}}
        >
          {/* <UserHeaderSidebarWrapper className='user-header-sidebar'> */}
            {/* <MainSidebar> */}
              {/* <AppScrollbar
                sx={{
                  py: 2,
                }}
                scrollToTop={false}
              > */}
                {/* <VerticalNav /> */}
              {/* </AppScrollbar> */}
            {/* </MainSidebar> */}
          {/* </UserHeaderSidebarWrapper> */}
        </Drawer>
      </Hidden>
    </>
  );
};

// export interface MenuProps {
//     children?: ReactNode;
//     className?: string;
//     dense?: boolean;
//     hasDashboard?: boolean;
// }

Menu.propTypes = {
  className: PropTypes.string,
  dense: PropTypes.bool,
  hasDashboard: PropTypes.bool,
};

const PREFIX = "RaMenu";

export const MenuClasses = {
  open: `${PREFIX}-open`,
  closed: `${PREFIX}-closed`,
};

const Root = styled("div", {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginTop: "0.5em",
  marginBottom: "1em",
  [theme.breakpoints.only("xs")]: {
    marginTop: 0,
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  [`&.${MenuClasses.open}`]: {
    width: lodashGet(theme, "sidebar.width", DRAWER_WIDTH),
  },

  [`&.${MenuClasses.closed}`]: {
    width: lodashGet(theme, "sidebar.closedWidth", CLOSED_DRAWER_WIDTH),
  },
}));
