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
import CollapsibleCard from "../components/collapsibleCard";
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

      <TextInput source="name" fullWidth />
      <TextInput source="description" multiline fullWidth />

      {/* <CollapsibleCard title="badge_tasks">
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
      </CollapsibleCard> */}

    </SimpleForm>
  </Edit>
);

export default UserEdit;
