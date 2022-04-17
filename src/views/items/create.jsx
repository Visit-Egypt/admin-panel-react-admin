// in src/users.js
import * as React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const UserList = (props) => (
  
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="short_description" />
      <TextInput source="long_description" />
      <TextInput source="default_image" />
      <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ArrayInput source="list_of_images">
        <SimpleFormIterator >
          <TextInput source="" />
        </SimpleFormIterator>
      </ArrayInput>
      
      {/* <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="id" />
      </ReferenceInput> */}
      {/* <TextInput source="id" disabled /> */}
    </SimpleForm>
  </Create>
);

export default UserList;
