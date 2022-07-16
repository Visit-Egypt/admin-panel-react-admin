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
  ReferenceInput,
  TextInput,
  SelectInput,
  ReferenceField,
  ReferenceArrayField,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
import TitleWithThumbnail from "../components/TitleWithThumbnail";

const Filters = [
  <TextInput label="Title" source="title" variant="outlined" />,
  <TextInput label="city" source="city" variant="outlined" />,
  <ReferenceArrayInput source="category" reference="tags" fullWidth>
    <SelectArrayInput optionText="name" fullWidth />
  </ReferenceArrayInput>,

  // <TextInput label="Last name" source="last_name" variant="outlined" />,
  // <SelectInput
  //   source="user_role"
  //   // translateChoice
  //   choices={[
  //     { id: "ADMIN", name: "ADMIN" },
  //     { id: "USER", name: "USER" },
  //     { id: "SUPER_ADMIN", name: "SUPER_ADMIN" },
  //   ]}
  // />,
];

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
  <List {...props} bulkActionButtons={false} filters={Filters}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TitleWithThumbnail   size="75" />

      <TextField source="city" />
      <TextField source="opening_hours" />
    </Datagrid>
  </List>
);

export default UserList;
