// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, ReferenceField, NumberField, ArrayField, SingleFieldList, ChipField } from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      {/* <TextField source="img_url" /> */}
      <TextField source="city" />
      <ReferenceField source="place_id" reference="places">
        <TextField source="title" />
      </ReferenceField>
      <NumberField source="max_progress" />
      <TextField source="type" />
      <NumberField source="xp" />
      {/* <TextField source="description" /> */}
      {/* <ArrayField source="badge_tasks">
        <SingleFieldList>
          <ChipField source="imgUrl" />
        </SingleFieldList>
      </ArrayField> */}
      {/* <TextField source="id" /> */}
    </Datagrid>
  </List>
);

export default UserList;
