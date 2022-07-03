import * as React from "react";
import {
  Datagrid,
  DateInput,
  EmailField,
  List,
  NullableBooleanInput,
  SearchInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

import CustomerLinkField from "./CustomerLinkField";
import MobileGrid from "./MobileGrid";
import VisitorListAside from "./VisitorListAside";

const visitorFilters = [
  <TextInput label="Email" source="email" variant="outlined" />,
  <TextInput label="First name" source="first_name" variant="outlined" />,
  <TextInput label="Last name" source="last_name" variant="outlined" />,
  <SelectInput
    source="user_role"
    // translateChoice
    choices={[
      { id: "ADMIN", name: "ADMIN" },
      { id: "USER", name: "USER" },
      { id: "SUPER_ADMIN", name: "SUPER_ADMIN" },
    ]}
  />,
];

const VisitorList = () => {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  return (
    <List
      filters={isSmall ? visitorFilters : undefined}
      // sort={{ field: "last_seen", order: "DESC" }}
      perPage={25}
      aside={<VisitorListAside />}
    >
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid
          bulkActionButtons={false}
          optimized
          rowClick="edit"
          sx={{
            "& .column-groups": {
              md: { display: "none" },
              lg: { display: "table-cell" },
            },
          }}
        >
          <CustomerLinkField />
          <EmailField source="email" />
          <TextField source="phone_number" />
          <TextField source="user_role" />

          {/* <SegmentsField source="groups" /> */}
        </Datagrid>
      )}
    </List>
  );
};

export default VisitorList;
