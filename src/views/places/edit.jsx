// in src/users.js
import * as React from "react";
import {
  SimpleForm,
  Edit,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { Field } from "react-final-form";

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="long_description" />
        <TextInput source="short_description" />
        <TextInput source="location_description" />
        <NumberInput source="longitude" />
        <NumberInput source="latitude" />
        <TextInput source="opening_hours" />
        <TextInput source="city" />
        <TextInput source="category" />
        <NumberInput source="views"  />

        <TextInput source="default_image" />
        <ArrayInput source="image_urls">
          <SimpleFormIterator>
            <TextInput source="" />
          </SimpleFormIterator>
        </ArrayInput>
        {/* <NumberInput source="ticket_prices.Foreigner Adult" /> */}
        {/* <ArrayInput source="ticket_prices">
        <SimpleFormIterator>
          <TextInput source="" />
        </SimpleFormIterator>
      </ArrayInput> */}
        {/* <ArrayInput source="reviews">
        <SimpleFormIterator>
        <NumberInput source="rating" />
        <TextInput source="review" />
        <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="user_name" />
        </SimpleFormIterator>
      </ArrayInput> */}
        <TextInput source="id" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
