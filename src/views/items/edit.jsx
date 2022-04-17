// in src/users.js
import * as React from "react";
import {
  SimpleForm,
  Edit,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="short_description" />
      <TextInput source="long_description" />
      <TextInput source="default_image" />
      <ArrayInput source="list_of_images">
        <SimpleFormIterator>
          <TextInput source="" />
        </SimpleFormIterator>
      </ArrayInput>
      <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextInput source="id" disabled />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
