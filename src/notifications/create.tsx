// in src/users.js
import * as React from "react";
import {
  ArrayInput,
  SimpleFormIterator,
  Create,
  ReferenceArrayField,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
} from "react-admin";

const UserList = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="icon_url" fullWidth />
      <TextInput source="description" fullWidth multiline />
      <ReferenceArrayInput source="sent_users_ids" reference="users" fullWidth>
        <SelectArrayInput optionText="email" fullWidth />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="category" reference="tags" fullWidth>
        <SelectArrayInput optionText="name" fullWidth />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);

export default UserList;
