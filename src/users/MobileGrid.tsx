// in src/comments.js
import * as React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import {
  DateField,
  EditButton,
  useTranslate,
  NumberField,
  RecordContextProvider,
  useListContext,
} from "react-admin";

import AvatarField from "./AvatarField";
import Avatar from "@mui/material/Avatar";
import ColoredNumberField from "./ColoredNumberField";
import SegmentsField from "./SegmentsField";
import { Customer } from "../types";

const MobileGrid = () => {
  const translate = useTranslate();
  const { data, isLoading } = useListContext<Customer>();

  if (isLoading || data.length === 0) {
    return null;
  }

  return (
    <Box margin="0.5em">
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <Card sx={{ margin: "0.5rem 0" }}>
            <CardHeader
              sx={{
                px: 6,
                pb: 0,
                "& .MuiCardHeader-action": {
                  marginTop: 0,
                  marginRight: 0,
                },
                "& .MuiCardHeader-content": {
                  overflow: "hidden",
                },
              }}
              action={<EditButton />}
            />
            <CardContent
              sx={{
                height: "100%",
                px: 6,
                "&:last-of-type": {
                  pb: 4,
                },
              }}
            >
              <Box
                sx={{
                  mb: 8,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 100, md: 120 },
                    height: { xs: 100, md: 120 },
                  }}
                  src={record.photo_link}
                />
                <Box
                  component="h3"
                  sx={{
                    mt: 8,
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {`${record.first_name} ${record.last_name}`}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    px: { xs: 2, xl: 4 },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      mb: 2,
                      fontWeight: 500,
                      fontSize: 20,
                    }}
                  >
                    {15}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      fontSize: 14,
                      textTransform: "uppercase",
                    }}
                  >
                    photos
                  </Box>
                </Box>
                <Box
                  sx={{
                    px: { xs: 2, xl: 4 },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      mb: 2,
                      fontWeight: 500,
                      fontSize: 20,
                    }}
                  >
                    {record.followers.length}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      fontSize: 14,
                      textTransform: "uppercase",
                    }}
                  >
                    followers
                  </Box>
                </Box>
                <Box
                  sx={{
                    px: { xs: 2, xl: 4 },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      mb: 2,
                      fontWeight: 500,
                      fontSize: 20,
                    }}
                  >
                    {record.following.length}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      fontSize: 14,
                      textTransform: "uppercase",
                    }}
                  >
                    following
                  </Box>
                </Box>
              </Box>
            </CardContent>
            {record.groups && record.groups.length > 0 && (
              <CardContent sx={{ pt: 0 }}>
                <SegmentsField />
              </CardContent>
            )}
          </Card>
        </RecordContextProvider>
      ))}
    </Box>
  );
};

export default MobileGrid;
