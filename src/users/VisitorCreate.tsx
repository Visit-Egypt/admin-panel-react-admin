import * as React from "react";
import {
  Create,
  DateInput,
  SimpleForm,
  TextInput,
  useTranslate,
  PasswordInput,
  email,
  required,
} from "react-admin";
import { Box, Typography } from "@mui/material";



const VisitorCreate = () => (
  <Create>
    <SimpleForm
      sx={{ maxWidth: 500 }}
    >
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

const SectionTitle = ({ label }: { label: string }) => {
  const translate = useTranslate();

  return (
    <Typography variant="h6" gutterBottom>
      {translate(label as string)}
    </Typography>
  );
};

const Separator = () => <Box pt="1em" />;

export default VisitorCreate;
