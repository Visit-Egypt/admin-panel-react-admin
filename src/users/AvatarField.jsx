import * as React from 'react';
import { Avatar, SxProps } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';



const AvatarField = ({ size = '25', sx }) => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <Avatar
            src={`${record.photo_link}?size=${size}x${size}`}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            sx={sx}
        />
    );
};

export default AvatarField;
