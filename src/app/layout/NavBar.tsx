import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { DarkMode, DesignServices, LightMode } from '@mui/icons-material';

import { useAppDispatch, useAppSelector } from '../store/store';
import { toggleDarkMode } from './uiSlice';
import { midLinks, rightLinks } from '../../lib/menus';

import UserMenu from './UserMenu';
import { useUserInfoQuery } from '../../features/account/accountApi';

const navRightStyles = {
  color: 'inherit',
  typography: 'h6',
  textDecoration: 'none',
  '&:hover': { color: 'grey.500' },
  '&.active': { color: '#baecf9' },
};

/**
 * Navigation bar component
 * @type {React.FC}
 * @returns {JSX.Element}
 */
export default function NavBar() {
  const { data: user } = useUserInfoQuery();
  const { isLoading, darkMode } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const itemCount = 20;

  return (
    <AppBar position='fixed'>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display='flex' alignItems='center'>
          <Typography
            component={NavLink}
            to={'/'}
            variant='h6'
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            Work Management System
          </Typography>
          <IconButton onClick={() => dispatch(toggleDarkMode())}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
          </IconButton>
        </Box>
        {user && (
          <List sx={{ display: 'flex' }}>
            {midLinks.map(({ title, path }) => (
              <ListItem
                key={path}
                component={NavLink}
                to={path}
                sx={navRightStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        )}

        <Box display='flex' alignItems='center'>
          <IconButton
            component={Link}
            to='/work'
            size='large'
            sx={{ color: 'inherit' }}
          >
            <Badge badgeContent={itemCount} color='secondary'>
              <DesignServices />
            </Badge>
          </IconButton>
          {user ? (
            <UserMenu user={user} />
          ) : (
            <List sx={{ display: 'flex' }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  key={path}
                  component={NavLink}
                  to={path}
                  sx={navRightStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress color='secondary' />
        </Box>
      )}
    </AppBar>
  );
}
