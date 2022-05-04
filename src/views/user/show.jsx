import {
  EmailField,
  ImageField,
  NumberField,
  Show,
  ShowBase,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonalInfo from "./show/PersonalInfo";
import Followers from "./show/Followers";
import Following from "./show/Following";
import Information from "./show/Information";
// import ChangePassword from "./show/ChangePassword";
// import Information from "./show/Information";
// import Social from "./show/Social";
// import Notification from "./show/Notification";
// import Account from "./show";
import AccountTabsWrapper from "./show/AccountTabsWrapper";
import { useState } from "react";

const tabs = [
  { id: 1, icon: <BiUser />, name: "personalInfo" },
  {
    id: 2,
    icon: <FiUsers />,
    name: "Followers",
  },
  {
    id: 3,
    icon: <FiUsers />,
    name: "Following",
  },
  {
    id: 3,
    icon: <IoMdInformationCircleOutline />,
    name: 'Information',
  },
  // {
  //   id: 4,
  //   icon: <IoShareSocialOutline />,
  //   name: "social",
  // },
  // {
  //   id: 5,
  //   icon: <NotificationsNoneIcon />,
  //   name: "notification",
  // },
];

const UserShow = (props) => {
  const [value, setValue] = useState(0);
  const onTabsChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ShowBase {...props}>
      {/* <SimpleShowLayout> */}
        <Box
          component="h2"
          variant="h2"
          sx={{
            fontSize: 16,
            color: "text.primary",
            // fontWeight: Fonts.SEMI_BOLD,
            mb: {
              xs: 2,
              lg: 4,
            },
          }}
        >
        </Box>
        <AccountTabsWrapper>
          <Tabs
            className="account-tabs"
            value={value}
            onChange={onTabsChange}
            aria-label="basic tabs example"
            orientation="vertical"
          >
            {tabs.map((tab, index) => (
              <Tab
                className="account-tab"
                label={tab.name}
                icon={tab.icon}
                key={index}
                // {...a11yProps(index)}
              />
            ))}
          </Tabs>
          <Box className="account-tabs-content">
            {value === 0 && <PersonalInfo />}
            {value === 1 && <Followers/>}
            {value === 2 && <Following />}
            {value === 3 && <Information/>}
            {/* {value === 4 && <Notification />} */}
          </Box>
        </AccountTabsWrapper>

        {/* <Account /> */}
        {/* <Box width={"100%"} display={{ md: "block", lg: "flex" }}>
        <Box flex={2} mr={{ md: 0, lg: "1em" }}>
          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextField  source="first_name" fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextField  source="last_name" fullWidth />
            </Box>
          </Box>
          <EmailField  source="email" fullWidth />
          <TextField  source="photo_link" fullWidth />
          <TextField  source="phone_number" fullWidth />
          <NumberField  source="postViews" fullWidth />
          <NumberField  source="xp" fullWidth />

          <Box display={{ xs: "block", sm: "flex" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextField source="id"  fullWidth />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextField
                source="user_role"
                fullWidth
              />
            </Box>
          </Box>

        </Box>
      </Box> */}

        {/* <EmailField source="email" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="phone_number" />
      <ImageField source="photo_link" /> */}
        {/* <ImageField source="photo_link" /> */}
        {/* <TextField source="id" />
      <TextField source="user_role" /> */}
      {/* </SimpleShowLayout> */}
    </ShowBase>
  );
};
export default UserShow;
