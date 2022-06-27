import * as React from "react";
import {
  Datagrid,
  DateInput,
  EmailField,
  List,
  NullableBooleanInput,
  SearchInput,
  TextField,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

import SegmentInput from "./SegmentInput";
import CustomerLinkField from "./CustomerLinkField";
import MobileGrid from "./MobileGrid";
import VisitorListAside from "./VisitorListAside";

const visitorFilters = [
  <SearchInput source="q" alwaysOn />,
  <DateInput source="last_seen_gte" />,
  <NullableBooleanInput source="has_ordered" />,
  <NullableBooleanInput source="has_newsletter" defaultValue />,
  <SegmentInput source="groups" />,
];

const VisitorList = () => {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  return (
    <List
      filters={isSmall ? visitorFilters : undefined}
      sort={{ field: "last_seen", order: "DESC" }}
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
