import {
  ArrayField,
  Datagrid,
  DateField,
  FunctionField,
  ImageField,
  NumberField,
  ReferenceField,
  RichTextField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  UrlField,
  useRecordContext,
} from "react-admin";

const LogField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  // return <span>{record[source]}</span>;
};

const ItemShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="short_description" />
      <TextField source="long_description" />
      <TextField source="default_image" />
      {/* <TextField source="list_of_images" /> */}
      <ArrayField source="list_of_images">
        <Datagrid>
          <FunctionField render={(record) => `${record}`} />;
        </Datagrid>
      </ArrayField>
      <ReferenceField source="place_id" reference="places">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
export default ItemShow;
