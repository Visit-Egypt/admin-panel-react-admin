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
  ReferenceField,
  TopToolbar,
  CreateButton,
  ExportButton,
  ListActions,
  Button,
  FilterButton,
  useRecordContext,
} from "react-admin";


const ListAction = (props) => (
  <TopToolbar>
    {/* <FilterButton /> */}
    <CreateButton />
    <ExportButton />
    {/* Add your custom actions */}
    {/* <Button
      onClick={() => {
        alert("Your custom action");
      }}
      label="Show calendar"
    >
      <IconEvent />
    </Button> */}
  </TopToolbar>
);

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
  <List {...props} actions={<ListAction />} bulkActionButtons={false}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <TextField source="short_description" />
      <TextFieldSmall source="long_description" />
      {/* <ImageField source="default_image"  /> */}
      {/* <TextField source="list_of_images" /> */}
      {/* <ArrayField source="list_of_images">
        <SingleFieldList>
          <TextField source="" />
        </SingleFieldList>
      </ArrayField> */}
      <ReferenceField source="place_id" reference="places">
        <TextField source="title" />
      </ReferenceField>
      {/* <TextField source="id" disabled /> */}
    </Datagrid>
  </List>
);

export default UserList;
