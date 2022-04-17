// in src/users.js
import * as React from "react";
import { ReactElement } from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  DateField,
  DateInput,
  ListProps,
  NullableBooleanInput,
  NumberField,
  SearchInput,
} from "react-admin";
import { useMediaQuery, Theme } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

// import SegmentsField from "./SegmentsField";
// import SegmentInput from "./SegmentInput";
import UserLinkField from "./CustomerLinkField";
// import ColoredNumberField from "./ColoredNumberField";
import MobileGrid from "./MobileGrid";
// import VisitorListAside from "./VisitorListAside";

// const visitorFilters = [
//   <SearchInput source="q" alwaysOn />,
//   <DateInput source="last_seen_gte" />,
//   <NullableBooleanInput source="has_ordered" />,
//   <NullableBooleanInput source="has_newsletter" defaultValue />,
//   <SegmentInput />,
// ];

const useStyles = makeStyles((theme) => ({
  nb_commands: { color: "purple" },
  hiddenOnSmallScreens: {
    display: "table-cell",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const UserList = (props) => {
  const classes = useStyles();
  const isXsmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      // filters={isSmall ? visitorFilters : undefined}
      // sort={{ field: "last_seen", order: "DESC" }}
      perPage={25}
      // aside={<VisitorListAside />}
    >
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid optimized rowClick="edit">
          <UserLinkField />
          {/* <TextField source="id" /> */}
          <EmailField source="email" />
          <TextField source="phone_number" />
          {/* <TextField source="photo_link" /> */}
          <TextField source="user_role" />
        </Datagrid>
      )}
    </List>
  );
};


export default UserList;
