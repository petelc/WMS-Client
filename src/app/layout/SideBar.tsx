import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { Link } from 'react-router-dom';

/**
 * Sidebar component
 * @type {React.FC}
 * @description Displays a sidebar with navigation links
 * @returns {JSX.Element}
 */
export default function SideBar() {
  return (
    <Paper sx={{ width: 220, maxWidth: '100%', height: '100%', pt: 1 }}>
      <MenuList sx={{ mt: 3 }}>
        <MenuItem
          component={Link}
          to='/request'
          sx={{ textDecoration: 'none', color: 'inherit', pb: 2 }}
        >
          <ListItemIcon>
            <BorderColorIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>New Request</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          to='/my-work'
          sx={{ textDecoration: 'none', color: 'inherit', pb: 2 }}
        >
          <ListItemIcon>
            <WorkspacesIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>My Work</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          to='/team'
          sx={{ textDecoration: 'none', color: 'inherit', pb: 2 }}
        >
          <ListItemIcon>
            <WorkspacesIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>My Team</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          to='/my-teams-work'
          sx={{ textDecoration: 'none', color: 'inherit', pb: 2 }}
        >
          <ListItemIcon>
            <WorkspacesIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>My Teams Work</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
