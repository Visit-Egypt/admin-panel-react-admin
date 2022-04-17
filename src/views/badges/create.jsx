// in src/users.js
import * as React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const UserList = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="city" />
      <TextInput source="type" />
      <NumberInput source="xp" />
      <TextInput source="description" />
      <TextInput source="img_url" />
      <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <NumberInput source="max_progress" />
      <ArrayInput source="badge_tasks">
        <SimpleFormIterator>
          <TextInput source="imgUrl" />
          <TextInput source="taskTitle" />
          <NumberInput source="max_progress" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export default UserList;
