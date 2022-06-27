// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,

} from "react-admin";
import TitleWithThumbnail from "../components/TitleWithThumbnail";

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TitleWithThumbnail thumbnailSource='img_url' />
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
