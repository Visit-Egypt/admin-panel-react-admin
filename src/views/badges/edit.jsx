// in src/users.js
import * as React from "react";
import { Field } from "react-final-form";

import { SimpleForm, Edit, TextInput, DateInput, Labeled, ReferenceInput, SelectInput, NumberInput, ArrayInput, SimpleFormIterator } from "react-admin";

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="city" />
      <TextInput source="type" />
      <NumberInput source="xp" />
      <TextInput source="description" />
      <TextInput source="img_url" />
      {/* <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="id" />
      </ReferenceInput> */}
      <NumberInput source="max_progress" />
      <ArrayInput source="badge_tasks">
        <SimpleFormIterator>
          <TextInput source="imgUrl" />
          <TextInput source="taskTitle" />
          <NumberInput source="max_progress" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="id" disabled />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
