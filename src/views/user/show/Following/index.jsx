import React from "react";
import { alpha, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AppGridContainer from "../../../../components/AppGridContainer";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  ArrayField,
  Datagrid,
  FunctionField,
  ReferenceArrayField,
  ReferenceField,
  SimpleList,
  SingleFieldList,
  useRecordContext,
} from "react-admin";
import TextField from "@mui/material/TextField";

const AvatarViewWrapper = styled("div")(({ theme }) => {
  return {
    position: "relative",
    cursor: "pointer",
    "& .edit-icon": {
      position: "absolute",
      bottom: 0,
      right: 0,
      zIndex: 1,
      border: `solid 2px ${theme.palette.background.paper}`,
      backgroundColor: alpha(theme.palette.primary.main, 0.7),
      color: theme.palette.primary.contrastText,
      borderRadius: "50%",
      width: 26,
      height: 26,
      display: "none",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.4s ease",
      cursor: "pointer",
      "& .MuiSvgIcon-root": {
        fontSize: 16,
      },
    },
    "&.dropzone": {
      outline: 0,
      "&:hover .edit-icon, &:focus .edit-icon": {
        display: "flex",
      },
    },
  };
});

const PersonalInfoForm = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 550,
      }}
    >
      {record.followers.length && (
        <ReferenceArrayField
          record={record}
          reference="users"
          source="following"
        >
          <SingleFieldList>
            <FunctionField
              render={(record) => {
                return (
                  record && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: { xs: 5, lg: 6 },
                      }}
                    >
                      <AvatarViewWrapper>
                        <label htmlFor="icon-button-file">
                          <Avatar
                            sx={{
                              width: { xs: 50, lg: 64 },
                              height: { xs: 50, lg: 64 },
                              cursor: "pointer",
                            }}
                            src={record.photo_link}
                          />
                        </label>
                      </AvatarViewWrapper>
                      <Box
                        sx={{
                          ml: 4,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          {`${record.first_name} ${record.last_name}`}
                        </Typography>
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.text.secondary,
                          }}
                        >
                          {record.email}
                        </Typography>
                      </Box>
                    </Box>
                  )
                );
              }}
            />
          </SingleFieldList>
        </ReferenceArrayField>
      )}
      {!record.following.length && "user isn't following anyone"}
    </Box>
  );
};

export default PersonalInfoForm;
