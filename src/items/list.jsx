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
} from "react-admin";
import TitleWithThumbnail from "../components/TitleWithThumbnail";

const ListAction = (props) => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
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
      <TitleWithThumbnail size="75" />
      <ReferenceField source="place_id" reference="places">
        <TitleWithThumbnail size="75" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default UserList;
