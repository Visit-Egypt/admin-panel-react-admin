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
import { useMediaQuery, Theme } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import UserLinkField from "./show/CustomerLinkField";
import MobileGrid from "./show/MobileGrid";
import { useEffect } from "react";


const UserList = (props) => {
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
      {isSmall ? (
        <MobileGrid />
      ) : (
        <Datagrid optimized rowClick="edit">
          <UserLinkField {...props} />
          <EmailField source="email" />
          <TextField source="phone_number" />
          <TextField source="user_role" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
