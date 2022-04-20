// in src/users.js
import * as React from "react";
import UserDataProvider from "../../dataProvider/users.js";

import {
  required,
  SimpleForm,
  Edit,
  TextInput,
  SelectInput,
  NumberInput,
  useRecordContext,
  useRefresh,
} from "react-admin";
import { Grid, Box, Card, CardContent } from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Button from "@mui/material/Button";

const Aside = (props) => {
  const record = useRecordContext();
  let [Role, setRole] = useState(record.user_role);
  let refreshRecord = useRefresh();
  let handleChange = (params) => {
    setRole(params.target.value);
  };
  let updateRole = async (params) => {
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

const UserEdit = (props) => {
  return (
    <>
      <Edit {...props} title="Edit User" aside={<Aside />}>
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
                  <TextInput
                    source="last_name"
                    validate={[required()]}
                    fullWidth
                  />
                </Box>
              </Box>
              <TextInput source="email" fullWidth />
              <TextInput source="photo_link" fullWidth />
              <TextInput source="phone_number" fullWidth />
              <NumberInput source="postViews" fullWidth />
              <NumberInput source="xp" fullWidth />

              {/* <Box display={{ xs: "block", sm: "flex" }}>
                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                  <NumberInput source="profileFrame.id" fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <NumberInput source="profileFrame.type" fullWidth />
                </Box>
              </Box>
              <TextInput source="profileFrame.imgUrl" fullWidth /> */}

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
    </>
  );
};

export default UserEdit;
