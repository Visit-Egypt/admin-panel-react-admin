import React from "react";
import { alpha, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AppGridContainer from "../../../../components/AppGridContainer";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  ArrayField,
  FunctionField,
  ReferenceField,
  ReferenceOneField,
  SingleFieldList,
  useRecordContext,
} from "react-admin";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { FiCheck, FiX } from "react-icons/fi";
import CollapsibleCard from "../../../../components/collapsibleCard";

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

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

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

      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth disabled label={"XP"} value={record.xp} />
        </Grid>

        {/* badges */}
        <Grid item xs={12} md={12}>
          <CollapsibleCard title="Badges">
            {record.badges.length && (
              <ArrayField record={record} source="badges">
                <SingleFieldList>
                  <FunctionField
                    render={(record) => {
                      return (
                        record && (
                          <>
                            {/* refrence files for the badge itself */}
                            <ReferenceField
                              record={record}
                              source="id"
                              reference="badges"
                            >
                              <FunctionField
                                render={(badgeRecord) => {
                                  return (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: { xs: 1, lg: 2 },
                                      }}
                                    >
                                      <AvatarViewWrapper>
                                        <label htmlFor="icon-button-file">
                                          <Avatar
                                            variant="rounded"
                                            sx={{
                                              width: { xs: 50, lg: 64 },
                                              height: { xs: 50, lg: 64 },
                                              cursor: "pointer",
                                            }}
                                            src={badgeRecord.img_url}
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
                                          {`${badgeRecord.title} `}
                                        </Typography>
                                        <LinearProgressWithLabel
                                          value={record.progress}
                                        />
                                      </Box>
                                      <Box
                                        sx={{
                                          ml: 4,
                                        }}
                                      >
                                        <Stack direction="row" spacing={1}>
                                          <Chip
                                            label="owned"
                                            color={
                                              record.owned ? "success" : "error"
                                            }
                                            icon={
                                              record.owned ? (
                                                <FiCheck />
                                              ) : (
                                                <FiX />
                                              )
                                            }
                                          />
                                          <Chip
                                            label="pinned"
                                            color={
                                              record.pinned
                                                ? "success"
                                                : "error"
                                            }
                                            icon={
                                              record.pinned ? (
                                                <FiCheck />
                                              ) : (
                                                <FiX />
                                              )
                                            }
                                          />
                                        </Stack>
                                      </Box>
                                    </Box>
                                  );
                                }}
                              />
                            </ReferenceField>
                          </>
                        )
                      );
                    }}
                  />
                </SingleFieldList>
              </ArrayField>
            )}
            {!record.badges.length && "user has no badges"}
          </CollapsibleCard>
        </Grid>

        {/* Badge tasks */}
        <Grid item xs={12} md={12}>
          <CollapsibleCard title="badge Tasks">
            {record.badges.length && (
              <ArrayField record={record} source="badge_tasks">
                <SingleFieldList>
                  <FunctionField
                    render={(record) => {
                      return (
                        record && (
                          <>
                            {/* refrence files for the badge itself */}
                            <ReferenceField
                              record={record}
                              source="badge_id"
                              reference="badges"
                            >
                              <FunctionField
                                render={(badgeRecord) => {
                                  return (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: { xs: 1, lg: 2 },
                                      }}
                                    >
                                      <AvatarViewWrapper>
                                        <label htmlFor="icon-button-file">
                                          <Avatar
                                            variant="rounded"
                                            sx={{
                                              width: { xs: 50, lg: 64 },
                                              height: { xs: 50, lg: 64 },
                                              cursor: "pointer",
                                            }}
                                            src={badgeRecord.img_url}
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
                                          {`${badgeRecord.title} `}
                                        </Typography>
                                        <LinearProgressWithLabel
                                          value={record.progress}
                                        />
                                      </Box>
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
                                          {`${record.taskTitle} `}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  );
                                }}
                              />
                            </ReferenceField>
                          </>
                        )
                      );
                    }}
                  />
                </SingleFieldList>
              </ArrayField>
            )}
            {!record.badges.length && "user has no badges"}
          </CollapsibleCard>
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
