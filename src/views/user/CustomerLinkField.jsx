import * as React from 'react';
import { Link, FieldProps } from 'react-admin';

import FullNameField from './FullNameField.jsx';

const UserLinkField = (props) =>
    props.record ? (
        <Link to={`/users/${props.record.id}`}>
            <FullNameField {...props} />
        </Link>
    ) : null;

UserLinkField.defaultProps = {
    source: 'id',
    addLabel: true,
};

export default UserLinkField;
