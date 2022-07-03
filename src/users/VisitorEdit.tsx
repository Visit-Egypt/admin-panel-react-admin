import * as React from "react";
import {
  DateInput,
  Edit,
  NullableBooleanInput,
  TextInput,
  PasswordInput,
  SimpleForm,
  useTranslate,
  SelectInput,
  NumberInput,
  required,
  useRecordContext,
  useRefresh,
} from "react-admin";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import UserDataProvider from "../dataProvider/users";

// import Aside from "./Aside";
import FullNameField from "./FullNameField";

const Aside = (props: any) => {
  const record = useRecordContext();
  let [Role, setRole] = React.useState(record.user_role);
  let refreshRecord = useRefresh();
  let handleChange = (params: any) => {
    setRole(params.target.value);
  };
  let updateRole = async (params: any) => {
    let responce = await UserDataProvider.updateUserRole(
      "users",
      { id: record.id, role: Role },
      "https://visit-egypt.herokuapp.com"
    );
    refreshRecord();
  };
  return (
    <Box width={400} display={{ xs: "block", lg: "block" }}>
      {record && (
        <Card sx={{ marginLeft: "10px" }}>
          <CardContent>
            {/* <Typography variant="h6" gutterBottom>
                history
              </Typography> */}
            <Grid container rowSpacing={1} columnSpacing={1}>
              <Grid item display="flex" sx={{ width: "90%" }}>
                <Box flexGrow={1}>
                  {/* <Typography variant="body2">Permossion</Typography> */}
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 120 }}
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      user Permission
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={Role}
                      onChange={handleChange}
                      fullWidth
                    >
                      <MenuItem value={"SUPER_ADMIN"}>SUPER_ADMIN</MenuItem>
                      <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                      <MenuItem value={"USER"}>USER</MenuItem>
                    </Select>
                    <Button
                      sx={{ marginTop: "15px" }}
                      variant="contained"
                      disabled={record.user_role === Role}
                      onClick={updateRole}
                    >
                      Update
                    </Button>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

const VisitorEdit = () => {
  const translate = useTranslate();
  return (
    <Edit title={<VisitorTitle />} aside={<Aside />}>
      <SimpleForm>
        <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
          <Box flex={2} mr={{ md: 0, lg: "1em" }}>
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput
                  disabled
                  source="first_name"
                  validate={[required()]}
                  fullWidth
                />
                {/* <WithRecord
                    label="First Name"
                    render={(record) => (
                      <TextInput
                        disabled={record.id !== userID}
                        record={record}
                        source="first_name"
                        validate={[required()]}
                        fullWidth
                      />
                    )}
                  /> */}
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <TextInput
                  disabled
                  source="last_name"
                  validate={[required()]}
                  fullWidth
                />
              </Box>
            </Box>
            <TextInput disabled source="email" fullWidth />
            <TextInput disabled source="photo_link" fullWidth />
            <TextInput disabled source="phone_number" fullWidth />
            <NumberInput disabled source="postViews" fullWidth />
            <NumberInput disabled source="xp" fullWidth />

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
                  disabled
                />
              </Box>
            </Box>

            {/* <UserRoleInput /> */}
          </Box>

        </Box>
      </SimpleForm>
    </Edit>
  );
};

const VisitorTitle = () => <FullNameField size="32" sx={{ margin: "5px 0" }} />;

export default VisitorEdit;
