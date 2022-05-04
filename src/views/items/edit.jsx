// in src/users.js
import * as React from "react";
import {
  SimpleForm,
  Edit,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  SelectInput,
  FormDataConsumer,
} from "react-admin";
import {
  required,
  useRecordContext,
} from "react-admin";
import { Box, Card } from "@mui/material";
import { useState } from "react";
import {
  CardContent,
  CardHeader,
  Avatar,
  Collapse,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Thumbnail = ({ size = "75", sx, img, source }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Avatar
      variant="square"
      // alt={record}
      src={`${img || record[source]}?size=${size}x${size}`}
      style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
      sx={sx}
    />
  );
};

const UserEdit = (props) => {
  let [ImagesCollapsedState, setImagesCollapsedState] = useState(false);

  return (
    <Edit {...props} mutationMode="undoable">
      <SimpleForm>
        <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
          <Box flex={2} mr={{ md: 0, lg: "1em" }}>
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="title" validate={[required()]} fullWidth />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <ReferenceInput source="place_id" reference="places">
                  <SelectInput optionText="title" fullWidth />
                </ReferenceInput>
              </Box>
            </Box>
            {/* <RichTextInput source="short_description" fullWidth /> */}
            <TextInput multiline source="short_description" fullWidth />
            <TextInput multiline source="long_description" fullWidth />
            {/* <ImageField source="default_image" sx={{width:'50px',height:'50px'}}  /> */}

            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={0} mr={{ xs: 0, sm: "0.5em" }}>
                <Thumbnail source="default_image" />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="default_image" fullWidth />
              </Box>
            </Box>
          </Box>
        </Box>

        <Card
          elevation={2}
          sx={{ width: "100%", padding: "20px 0 20px 0", margin: "20px 0 0 0" }}
        >
          <CardHeader
            title="Images"
            action={
              <IconButton
                aria-label="settings"
                onClick={() => {
                  setImagesCollapsedState(!ImagesCollapsedState);
                }}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            }
          />

          <Collapse in={ImagesCollapsedState}>
            <CardContent>
              <ArrayInput source="list_of_images">
                <SimpleFormIterator  >
                  <FormDataConsumer>
                    {({ formData, getSource, scopedFormData }) => {
                      // getSource("").slice(0, -1) returns an extra . at the end so we slice it off to get the right value
                      return (
                        <Box
                          display={{ xs: "block", sm: "flex", width: "100%" }}
                        >
                          <Box flex={0} mr={{ xs: 0, sm: "0.5em" }}>
                            <Thumbnail
                              source={getSource("").slice(0, -1)}
                              img={scopedFormData}
                            />
                          </Box>
                          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                            <TextInput
                              source={getSource("").slice(0, -1)}
                              record={scopedFormData}
                              fullWidth
                            />
                          </Box>
                        </Box>
                      );
                    }}
                  </FormDataConsumer>
                </SimpleFormIterator>
              </ArrayInput>
            </CardContent>
          </Collapse>
        </Card>
        <TextInput source="id" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
