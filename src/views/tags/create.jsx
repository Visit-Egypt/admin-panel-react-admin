// in src/users.js
import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

const UserList = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="description" fullWidth multiline />
    </SimpleForm>
  </Create>
);

export default UserList;
