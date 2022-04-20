import * as React from "react";
import { Link, FieldProps, useRecordContext } from "react-admin";

import FullNameField from "./FullNameField.jsx";

const UserLinkField = (props) => {
  const record = useRecordContext();
  if (!record) {
    return null;
  }
  return (
    <Link to={`/customers/${record.id}`}>
      <FullNameField />
    </Link>
  );
};
UserLinkField.defaultProps = {
  source: "User",
  addLabel: true,
};

export default UserLinkField;
