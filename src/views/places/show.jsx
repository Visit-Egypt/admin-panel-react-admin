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
  // console.log(record);
  // return <span>{record[source]}</span>;
};

const PlaceShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <RichTextField source="long_description" />
      <TextField source="short_description" />
      <TextField source="location_description" />
      <NumberField source="longitude" />
      <NumberField source="latitude" />
      {/* <TextField source="image_urls" /> */}
      <ArrayField source="image_urls">
        <Datagrid>
          <FunctionField render={(record) => `${record}`} />;
        </Datagrid>
      </ArrayField>
      <ImageField source="default_image" />
      <TextField source="opening_hours" />
      <TextField source="city" />
      <NumberField source="ticket_prices.Foreigner Adult" />
      <TextField source="category" />
      <NumberField source="views" />
      {/* <TextField source="explores" /> */}
      {/* <TextField source="placeActivities" /> */}
      <ArrayField source="reviews">
        <Datagrid>
          <NumberField source="rating" />
          <TextField source="review" />
          <ReferenceField source="user_id" reference="users">
            <TextField source="id" />
          </ReferenceField>
          <TextField source="user_name" />
        </Datagrid>
      </ArrayField>
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
export default PlaceShow;
