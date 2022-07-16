// in src/users.js
import * as React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

const UserList = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="long_description" />
      <TextInput source="short_description" />
      <TextInput source="location_description" />
      <NumberInput source="longitude" />
      <NumberInput source="latitude" />
      <TextInput source="opening_hours" />
      <TextInput source="city" />
      <ReferenceArrayInput source="category" reference="tags" fullWidth>
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <NumberInput source="views" />
      <NumberInput source="ticket_prices.Egyptian Adult" />
      <NumberInput source="ticket_prices.Egyptian Student" />
      <NumberInput source="ticket_prices.Foreigner Adult" />
      <NumberInput source="ticket_prices.Foreigner Student" />
      <TextInput source="default_image" />
      <ArrayInput source="image_urls">
        <SimpleFormIterator>
          <TextInput source="" />
        </SimpleFormIterator>
      </ArrayInput>
      {/* <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="id" />
      </ReferenceInput> */}
      {/* <TextInput source="id" disabled /> */}
    </SimpleForm>
  </Create>
);

export default UserList;
