// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import TitleWithThumbnail from "../components/TitleWithThumbnail";

const Filters = [
  <TextInput label="Title" source="title" variant="outlined" />,
  <TextInput label="type" source="type" variant="outlined" />,
  <ReferenceInput
    label="Place"
    source="place_id"
    reference="places"
    variant="outlined"
  >
    <SelectInput optionText="title" />
  </ReferenceInput>,

];

const UserList = (props) => (
  <List {...props} filters={Filters}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TitleWithThumbnail thumbnailSource="img_url" />
      {/* <TextField source="img_url" /> */}
      <TextField source="city" />
      <ReferenceField source="place_id" reference="places">
        <TitleWithThumbnail size="75" />
      </ReferenceField>
      <NumberField source="max_progress" />
      <TextField source="type" />
      <NumberField source="xp" />
    </Datagrid>
  </List>
);

export default UserList;
