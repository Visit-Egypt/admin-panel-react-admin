import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import AppCard from '@crema/core/AppCard';

const Profile = (props) => {
  const {data} = props;

  return (
    <AppCard
      sxStyle={{height: 1}}
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      title={'wall'}
      action={
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      }
    >
      <Box
        sx={{
          mb: 8,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Avatar
          sx={{
            width: {xs: 100, md: 120},
            height: {xs: 100, md: 120},
          }}
          src={data.photo_link}
        />
        <Box
          component='h3'
          sx={{
            mt: 8,
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          {`${data.first_name} ${data.last_name}`}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
          mb: 1,
        }}
      >
        <Box
          sx={{
            px: {xs: 2, xl: 4},
          }}
        >
          <Box
            component='span'
            sx={{
              display: 'block',
              mb: 2,
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            {15}
          </Box>
          <Box
            component='span'
            sx={{
              color: 'text.secondary',
              display: 'block',
              fontSize: 14,
              textTransform: 'uppercase',
            }}
          >
            photos
          </Box>
        </Box>
        <Box
          sx={{
            px: {xs: 2, xl: 4},
          }}
        >
          <Box
            component='span'
            sx={{
              display: 'block',
              mb: 2,
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            {data.followers.length}
          </Box>
          <Box
            component='span'
            sx={{
              color: 'text.secondary',
              display: 'block',
              fontSize: 14,
              textTransform: 'uppercase',
            }}
          >
            followers
          </Box>
        </Box>
        <Box
          sx={{
            px: {xs: 2, xl: 4},
          }}
        >
          <Box
            component='span'
            sx={{
              display: 'block',
              mb: 2,
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            {data.following.length}
          </Box>
          <Box
            component='span'
            sx={{
              color: 'text.secondary',
              display: 'block',
              fontSize: 14,
              textTransform: 'uppercase',
            }}
          >
            following
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default Profile;

