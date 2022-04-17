// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ArrayField,
  ChipField,
  SingleFieldList,
  ImageField,
  NumberField
} from "react-admin";
import { useRecordContext } from "react-admin";

const TextFieldSmall = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  return <span>{record[source].slice(0, 100)}</span>;
};

const ImagePreviewField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  return <span>{record[source].slice(0, 100)}</span>;
};

const UserList = (props) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <TextField source="short_description" />
      {/* <TextFieldSmall source="long_description" /> */}
      <TextField source="location_description" />
      {/* <NumberField source="longitude" /> */}
      {/* <NumberField source="latitude" /> */}
      {/* <TextField source="image_urls" /> */}
      {/* <TextField source="default_image" /> */}
      <TextField source="category" />
      <TextField source="city" />
      <TextField source="opening_hours" />
      {/* <NumberField source="ticket_prices.Foreigner Adult" /> */}
      {/* <DateField source="views" /> */}
      {/* <ArrayField source="reviews">
        <SingleFieldList>
          <ChipField source="rating" />
        </SingleFieldList>
      </ArrayField> */}
      {/* <TextField source="id" /> */}
    </Datagrid>
  </List>
);

export default UserList;
