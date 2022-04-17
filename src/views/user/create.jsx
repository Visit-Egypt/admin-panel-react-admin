import * as React from "react";
import { Field } from "react-final-form";

import {
  EditProps,
  NullableBooleanInput,
  PasswordInput,
  Toolbar,
  useTranslate,
  FormWithRedirect,
  required,
  email,
  FieldProps,
  SimpleForm,
  Edit,
  TextInput,
  DateInput,
  Labeled,
  Create,
} from "react-admin";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

// import Aside from "./Aside";
import FullNameField from "./FullNameField";
// import SegmentsInput from "./SegmentsInput";
// import { validatePasswords } from "./VisitorCreate";

const UserList = (props) => (
  <Create {...props}>
    <SimpleForm>
      <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
        <Box flex={2} mr={{ md: 0, lg: "1em" }}>
          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput
                source="first_name"
                validate={[required()]}
                fullWidth
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="last_name" validate={[required()]} fullWidth />
            </Box>
          </Box>
          <TextInput source="email" fullWidth />
          <TextInput source="photo_link" fullWidth />
          <TextInput source="phone_number" fullWidth />

          <TextInput source="password"  fullWidth />

          {/* <UserRoleInput /> */}
        </Box>
      </Box>
      {/* <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput> */}
    </SimpleForm>
  </Create>
);

export default UserList;
