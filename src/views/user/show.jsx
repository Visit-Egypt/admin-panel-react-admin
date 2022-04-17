import {
  EmailField,
  ImageField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";


const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <EmailField source="email" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="phone_number" />
      <ImageField source="photo_link" />
      {/* <ImageField source="photo_link" /> */}
      <TextField source="id" />
      <TextField source="user_role" />
    </SimpleShowLayout>
  </Show>
);
export default UserShow;
