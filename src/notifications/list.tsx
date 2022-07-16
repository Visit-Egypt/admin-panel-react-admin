// @ts-ignore
// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  SimpleFormIterator,
} from "react-admin";
import { ArrayInput } from "react-admin";
const NotificationsList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid rowClick="view" bulkActionButtons={false}>
        <ImageField title="icon" source="icon_url" />
        <TextField source="title" />
        <TextField source="description" />

      </Datagrid>
    </List>
  );
};

export default NotificationsList;
