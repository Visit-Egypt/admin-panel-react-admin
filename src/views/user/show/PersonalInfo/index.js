import React from "react";
import { alpha, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AppGridContainer from "../../../../components/AppGridContainer";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useRecordContext } from "react-admin";
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

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 550,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: { xs: 5, lg: 6 },
        }}
      >
        <AvatarViewWrapper>
          {/* <input {...getInputProps()} /> */}
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
      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField disabled fullWidth label={"First Name"} value={record.first_name}  />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField disabled fullWidth label={"Last Name"} value={record.last_name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField disabled fullWidth value={record.email} label={"Email"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField disabled
            value={record.phone_number}
            fullWidth
            label={"Phone Number"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField disabled value={record.bithdate} fullWidth label={"Birthdate"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField disabled value={record.user_role} fullWidth label={"Role"} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField disabled value={record.bio} multiline fullWidth rows={3} label={"Bio"} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          ></Box>
        </Grid>
      </AppGridContainer>
    </Box>
  );
};

export default PersonalInfoForm;
PersonalInfoForm.propTypes = {
  setFieldValue: PropTypes.func,
  values: PropTypes.object,
};
