import * as React from "react";
import { Link, FieldProps, useRecordContext } from "react-admin";


import { memo } from "react";
import { SxProps, Typography,Avatar } from "@mui/material";

const TitleWithThumbnail = (props) => {
  const record = useRecordContext();
  if (!record) {
    return null;
  }
  return (
    // <Link to={`/customers/${record.id}`}>
      <TitleField {...props} />
    // </Link>
  );
};


const TitleField = (props) => {
  const { size } = props;
  const record = useRecordContext();
  return record ? (
    <Typography
      variant="body2"
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      component="div"
      sx={props.sx}
    >
      <Thumbnail
        record={record}
        size={size}
        source={props.thumbnailSource}
        sx={{
          mr: 1,
          mt: -0.5,
          mb: -0.5,
        }}
      />
      {record.title}
    </Typography>
  ) : null;
};


const Thumbnail = ({ size = '75', sx,source = 'default_image' }) => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <Avatar variant="square" alt={record.title} 
            src={`${record[source]}?size=${size}x${size}`}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            sx={sx}
        />
    );
}; 

export default TitleWithThumbnail