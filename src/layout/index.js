// in src/MyLayout.js
import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import {
  AppBar,
  // Menu,
  Sidebar,
  ComponentPropType,
  useSidebarState,
} from "react-admin";

import {Menu} from './menu'

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  position: "relative",
  minWidth: "fit-content",
  width: "100%",
  color: theme.palette.getContrastText(theme.palette.background.default),
}));

const AppFrame = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowX: "auto",
  flexGrow: 1,
  [theme.breakpoints.up("xs")]: {
    marginTop: theme.spacing(6),
  },
  [theme.breakpoints.down("xs")]: {
    marginTop: theme.spacing(7),
  },
}));

const ContentWithSidebar = styled("main")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 2,
  padding: theme.spacing(3),
  // marginTop: "4em",
  paddingLeft: 5,
  backgroundColor: theme.palette.background.default,
  zIndex: 2,
  flexBasis: 0,
  paddingTop: theme.spacing(1),
  [theme.breakpoints.up("xs")]: {
    paddingLeft: 5,
  },
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));

const MyLayout = ({ children, dashboard, title }) => {
  const [open] = useSidebarState();

  return (
    <Root>
      <AppFrame>
        <AppBar title={title} open={open} />
        <ContentWithSidebar>
          <Sidebar>
            <Menu hasDashboard={!!dashboard} />
          </Sidebar>
          {/* actual page content */}
          <Content>{children}</Content>
        </ContentWithSidebar>
      </AppFrame>
    </Root>
  );
};

MyLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  dashboard: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

export default MyLayout;
