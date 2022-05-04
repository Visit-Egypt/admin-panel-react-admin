// in src/comments.js
import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import {
  EditButton,
  EmailField,
  TextField,
  useListContext,
  RecordContextProvider,
} from "react-admin";
import Avatar from "@mui/material/Avatar";

import AvatarField from "./AvatarField";

import { Box } from "@mui/material";

const MobileGrid = () => {
  const { data, isLoading } = useListContext();
  if (isLoading || data.length === 0) {
    return null;
  }
  return (
    <Box margin="0.5em">
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <Card
            key={record.id}
            sxStyle={{ height: 1 }}
            contentStyle={{
              display: "flex",
              flexDirection: "column",
            }}
            title={"wall"}
            style={{
              marginBottom: "25px",
            }}
          >
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
          </Card>
          {/* <Card key={record.id} sx={{ margin: "0.5rem 0" }}>
            <CardHeader
              title={
                <div>
                  <h2>{`${record.first_name} ${record.last_name}`}</h2>
                </div>
              }
              action={<EditButton />}
              avatar={<AvatarField size="45" />}
            />
            <CardContent sx={{ pt: 0 }}>
              <div>
                <EmailField source="email" />
              </div>
              <div>
                <TextField source="phone_number" />
              </div>
              <div>
                <TextField source="user_role" />
              </div>
            </CardContent>
            {record.groups && record.groups.length > 0 && (
              <CardContent sx={{ pt: 0 }}></CardContent>
            )}
          </Card> */}
        </RecordContextProvider>
      ))}
    </Box>
  );
};

MobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default MobileGrid;
