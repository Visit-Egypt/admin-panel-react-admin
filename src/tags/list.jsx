// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
} from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export default UserList;
