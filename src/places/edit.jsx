// in src/users.js
import * as React from "react";
import {
  SimpleForm,
  Edit,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  BooleanInput,
  required,
  useRecordContext,
  FormDataConsumer,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { Box, Avatar } from "@mui/material";
import CollapsibleCard from "../components/collapsibleCard";

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
  return (
    <Edit {...props} mutationMode="undoable">
      <SimpleForm sx={{ marginBottom: "100px" }}>
        <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
          <Box flex={2} mr={{ md: 0, lg: "1em" }}>
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="title" validate={[required()]} fullWidth />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="id" disabled fullWidth />
              </Box>
            </Box>
            <TextInput multiline source="short_description" fullWidth />
            <TextInput multiline source="long_description" fullWidth />
            <TextInput source="location_description" fullWidth />
            {/* hours - city - category - views */}
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput fullWidth source="opening_hours" />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <TextInput fullWidth source="city" />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                {/* <TextInput fullWidth source="category" /> */}
                <ReferenceArrayInput
                  source="category"
                  reference="tags"
                  fullWidth
                >
                  <SelectArrayInput optionText="name" fullWidth />
                </ReferenceArrayInput>
              </Box>

              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <NumberInput fullWidth source="views" />
              </Box>
            </Box>
            {/* long - lat */}
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <NumberInput source="longitude" fullWidth />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <NumberInput source="latitude" fullWidth />
              </Box>
            </Box>
            {/* default image */}
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
        {/* Images */}
        <CollapsibleCard title="Images">
          <ArrayInput source="image_urls" fullWidth>
            <SimpleFormIterator>
              <FormDataConsumer>
                {({ getSource, scopedFormData }) => {
                  // getSource("").slice(0, -1) returns an extra . at the end so we slice it off to get the right value
                  return (
                    <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                      <Box flex={0} mr={{ xs: 0, sm: "0.5em" }}>
                        <Thumbnail
                          // source=''
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
        </CollapsibleCard>
        {/* Place Activites */}
        <CollapsibleCard title="Place Activites">
          <ArrayInput source="placeActivities">
            <SimpleFormIterator>
              <FormDataConsumer>
                {({ formData, getSource, scopedFormData }) => {
                  // getSource("").slice(0, -1) returns an extra . at the end so we slice it off to get the right value
                  return (
                    <>
                      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                          <TextInput
                            source={getSource("title")}
                            record={scopedFormData}
                            fullWidth
                            label="Title"
                          />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                          <TextInput
                            source={getSource("duration")}
                            record={scopedFormData}
                            fullWidth
                            label="Duration"
                          />
                        </Box>
                      </Box>
                      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                          <NumberInput
                            source={getSource("xp")}
                            record={scopedFormData}
                            fullWidth
                            label="XP"
                          />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                          <NumberInput
                            source={getSource("type")}
                            record={scopedFormData}
                            fullWidth
                            label="Type"
                          />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                          <NumberInput
                            source={getSource("maxProgress")}
                            record={scopedFormData}
                            fullWidth
                            label="Max Progress"
                          />
                        </Box>
                      </Box>

                      <TextInput
                        source={getSource("description")}
                        record={scopedFormData}
                        multiline
                        fullWidth
                        label="Description"
                      />
                      <BooleanInput
                        source={getSource("customXp")}
                        record={scopedFormData}
                        label="Custom XP"
                      />
                    </>
                  );
                }}
              </FormDataConsumer>
            </SimpleFormIterator>
          </ArrayInput>
        </CollapsibleCard>

        {/* ticket Prices */}
        <CollapsibleCard title="Ticket Prices">
          <FormDataConsumer>
            {({ formData, getSource, scopedFormData }) => {
              return (
                <Box
                  display={{ xs: "block", sm: "flex", width: "100%" }}
                  style={{ flexWrap: "wrap" }}
                >
                  {Object.entries(formData.ticket_prices).map((entry) => {
                    return (
                      <Box
                        flex={1}
                        mr={{ xs: 0, sm: "0.5em" }}
                        style={{ minWidth: "300px" }}
                        key={`ticket_prices.${entry[0]}`}
                      >
                        <NumberInput
                          source={`ticket_prices.${entry[0]}`}
                          record={formData}
                          fullWidth
                          label={entry[0]}
                        />
                      </Box>
                    );
                  })}
                </Box>
              );
            }}
          </FormDataConsumer>
        </CollapsibleCard>

        {/* reviews */}

        <CollapsibleCard title="Reviews">
          <ArrayInput source="reviews" fullWidth>
            <SimpleFormIterator disableAdd>
              <FormDataConsumer>
                {({ formData, getSource, scopedFormData }) => {
                  return (
                    <>
                      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                          <TextInput
                            source={getSource("user_name")}
                            record={scopedFormData}
                            fullWidth
                            label="User Name"
                            disabled
                          />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                          <NumberInput
                            source={getSource("rating")}
                            record={scopedFormData}
                            fullWidth
                            label="Rating"
                            disabled
                          />
                        </Box>
                      </Box>
                      <TextInput
                        source={getSource("review")}
                        record={scopedFormData}
                        fullWidth
                        label="Review"
                        disabled
                      />
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
};

export default UserEdit;
