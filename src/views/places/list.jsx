// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ArrayField,
  ChipField,
  SingleFieldList,
  ImageField,
  NumberField,
} from "react-admin";
import { useRecordContext } from "react-admin";
import TitleWithThumbnail from "../../components/TitleWithThumbnail";

const TextFieldSmall = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  return <span>{record[source].slice(0, 100)}</span>;
};

const ImagePreviewField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  return <span>{record[source].slice(0, 100)}</span>;
};

const UserList = (props) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid rowClick="edit">
      <TitleWithThumbnail size="75" />


      <TextField source="category" />
      <TextField source="city" />
      <TextField source="opening_hours" />

    </Datagrid>
  </List>
);

export default UserList;
