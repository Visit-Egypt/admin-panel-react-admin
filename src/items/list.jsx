// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TopToolbar,
  CreateButton,
  ExportButton,
  useRecordContext,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import TitleWithThumbnail from "../components/TitleWithThumbnail";

const ListAction = (props) => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
    
  </TopToolbar>
);
const Filters = [
  <TextInput label="Title" source="title" variant="outlined" />,
  <ReferenceInput
    label="Place"
    source="place_id"
    reference="places"
    variant="outlined"
  >
    <SelectInput optionText="title" />
  </ReferenceInput>,

];

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
  <List
    {...props}
    // actions={<ListAction />}
    bulkActionButtons={false}
    filters={Filters}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TitleWithThumbnail size="75" />
      <ReferenceField source="place_id" reference="places">
        <TitleWithThumbnail size="75" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default UserList;
