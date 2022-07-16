// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
} from "react-admin";

const tagsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export default tagsList;
