import * as React from "react";

import { required, SimpleForm, TextInput, Create } from "react-admin";
import { Box } from "@mui/material";

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

          <TextInput source="password" fullWidth />

        </Box>
      </Box>

    </SimpleForm>
  </Create>
);

export default UserList;
