// in src/users.js
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
  SelectInput,
  NumberInput,
} from "react-admin";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

// import Aside from "./Aside";
import FullNameField from "./FullNameField";
// import SegmentsInput from "./SegmentsInput";
// import { validatePasswords } from "./VisitorCreate";

const UserEdit = (props) => (
  <Edit {...props} title="Edit User">
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
          <NumberInput source="postViews" fullWidth />
          <NumberInput source="xp" fullWidth />

          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="id" disabled fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <SelectInput
                source="user_role"
                
                fullWidth
                choices={[
                  { id: "SUPER_ADMIN", name: "SUPER ADMIN" },
                  { id: "ADMIN", name: "ADMIN" },
                  { id: "USER", name: "USER" },
                ]}
              />
            </Box>
          </Box>
          {/* <UserRoleInput /> */}
        </Box>
      </Box>
    </SimpleForm>
  </Edit>
);

export default UserEdit;
