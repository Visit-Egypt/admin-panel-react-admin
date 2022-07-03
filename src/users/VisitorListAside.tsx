import * as React from "react";
import { Card, CardContent } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOnOutlined";
import MailIcon from "@mui/icons-material/MailOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOfferOutlined";
import {
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  FilterFormInput,
  Filter,
  TextInput,
} from "react-admin";
import {
  endOfYesterday,
  startOfWeek,
  subWeeks,
  startOfMonth,
  subMonths,
} from "date-fns";

import segments from "../segments/data";

const Aside = () => (
  <Card
    sx={{
      display: {
        xs: "none",
        md: "block",
      },
      order: -1,
      flex: "0 0 15em",
      mr: 2,
      mt: 8,
      alignSelf: "flex-start",
    }}
  >
    <CardContent sx={{ pt: 1 }}>
      {/* @ts-ignore */}
      {/* <FilterLiveSearch source="email" title="email" variant="outlined" /> */}
      {/* <FilterFormInput  ></FilterFormInput> */}

      <Filter >
        <TextInput label="Email" source="email" variant="outlined" alwaysOn />
      </Filter>

      <Filter >
        <TextInput label="First name" source="first_name" variant="outlined" alwaysOn />
      </Filter>

      <Filter >
        <TextInput label="Last name" source="last_name" variant="outlined" alwaysOn />
      </Filter>

      <FilterList label="Permission" icon={<LocalOfferIcon />}>
        <FilterListItem
          label={"ADMIN"}
          key={"ADMIN"}
          value={{ user_role: "ADMIN" }}
        />
        <FilterListItem
          label={"USER"}
          key={"USER"}
          value={{ user_role: "USER" }}
        />
        <FilterListItem
          label={"SUPER_ADMIN"}
          key={"SUPER_ADMIN"}
          value={{ user_role: "SUPER_ADMIN" }}
        />
      </FilterList>
    </CardContent>
  </Card>
);

export default Aside;
