// in src/users.js
import * as React from "react";

import {
  SimpleForm,
  Edit,
  TextInput,

  ReferenceInput,
  SelectInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  FormDataConsumer,
} from "react-admin";
import { Box } from "@mui/material";
import CollapsibleCard from "../../components/collapsibleCard";
import { Avatar } from "@mui/material";

const Thumbnail = ({ size = "75", sx, img, source, record }) => {
  if (!record) return null;
  return (
    <Avatar
      variant="square"
      src={`${img || record[source]}?size=${size}x${size}`}
      style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
      sx={sx}
    />
  );
};

const UserEdit = (props) => (
  <Edit {...props} mutationMode="undoable">
    <SimpleForm>
      <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
        <Box flex={2} mr={{ md: 0, lg: "1em" }}>
          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="title" fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="city" fullWidth />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <NumberInput source="xp" fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <NumberInput source="max_progress" fullWidth />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="type" fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <ReferenceInput source="place_id" reference="places">
                <SelectInput optionText="title" fullWidth />
              </ReferenceInput>
            </Box>
          </Box>
        </Box>
      </Box>
      <TextInput source="img_url" fullWidth />
      <TextInput source="description" multiline fullWidth />

      <CollapsibleCard title="badge_tasks">
        <ArrayInput source="badge_tasks" fullWidth>
          <SimpleFormIterator>
            <FormDataConsumer>
              {({ getSource, scopedFormData }) => {
                return (
                  <>
                    <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                      <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                        <TextInput
                          source={getSource("taskTitle")}
                          record={scopedFormData}
                          fullWidth
                          label="Title"
                        />
                      </Box>
                      <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                        <NumberInput
                          source={getSource("max_progress")}
                          record={scopedFormData}
                          fullWidth
                          label="max_progress"
                        />
                      </Box>
                    </Box>
                    <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                      <Box flex={0} mr={{ xs: 0, sm: "0.5em" }}>
                        <Thumbnail
                          source="imgUrl"
                          // img={scopedFormData}
                          record={scopedFormData}
                        />
                      </Box>
                      <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                        <TextInput
                          source={getSource("imgUrl")}
                          record={scopedFormData}
                          fullWidth
                        />
                      </Box>
                    </Box>
                  </>
                );
              }}
            </FormDataConsumer>
          </SimpleFormIterator>
        </ArrayInput>
      </CollapsibleCard>

    </SimpleForm>
  </Edit>
);

export default UserEdit;
